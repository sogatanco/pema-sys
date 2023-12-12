<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use JWTAuth;
use App\Http\Resources\UserResource;
use App\Http\Resources\KodeExpire;
use App\Http\Requests\UserRegisterRequest;
use App\Models\UserVendor;
use App\Models\Vendor\ViewPerusahaan;
use Mail;
use App\Mail\VendorMail;
use App\Http\Resources\PostResource;
use Config;
use KodeExpire as GlobalKodeExpire;

class Auth2Controller extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor', ['except' => ['login', 'register', 'welcome', 'kirimEmail', 'verifEmail']]);
    }

    public function register(userRegisterRequest $request): userResource
    {
        $data = $request->validated();

        if (UserVendor::where('email', $data['email'])->count() == 1) {
            // user already exist
            throw new HttpResponseException(response([
                "errors" => [
                    "email" => [
                        "Email already registered."
                    ]
                ]
            ], 409));
        }

        $defaultRole = ["Vendor"];

        $user = new UserVendor($data);
        $user->roles = $defaultRole;
        $user->password = Hash::make($data['password']);

        if ($user->save()) {
            $this->kirimEmail($user->id);

            return new UserResource($user);
        }
    }

    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if ($validator->fails()) {
            throw new HttpResponseException(response([
                "message" => $validator->errors()
            ], 400));
        }

        $token = Auth::guard('api_vendor')->attempt(['email' => $request->email, 'password' => $request->password]);

        if (!$token) {
            throw new HttpResponseException(response([
                "status" => false,
                "message" => "Email or password is invalid."
            ], 400));
        }

        $user = Auth::guard('api_vendor')->user();

        return response()->json([
            "status" => true,
            "message" => "Login success.",
            "auth" => [
                "user" => $user,
                "token" => $token,
            ]
        ], 200);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            "status" => true,
            "message" => "Logout success."
        ], 200);
    }

    public function refresh()
    {
        $token = Auth::refresh();
        $user = Auth::user();

        return response()->json([
            "status" => true,
            "message" => "Refresh token success.",
            "token" => $token
        ], 200);
    }

    public function welcome()
    {
        return response()->json([
            "messsage" => "Hello world!"
        ], 200);
    }

    function kirimEmail($id)
    {
        $per = ViewPerusahaan::where('id_user', $id)->get()->first();
        $digits = 10;
        $uniq=base64_encode((rand(pow(10, $digits - 1), pow(10, $digits) - 1)).($id+45).'-'.strtotime(now()));
        $mailData = [
            'link' => Config::get('app.url').'api/auth2/verif/'.$uniq,
            'company_name'=>$per['bentuk_usaha'].' '.$per['nama_perusahaan']
        ];
        if (Mail::to($per['email'])->send(new VendorMail($mailData))) {
            return new PostResource(true, 'Email Verification sent succesfully', []);
        }else{
            return new PostResource(false, 'Failed to send', []);
        }
    }


    function verifEmail($id_token)
    {
        $token_explode=explode("-", [base64_decode($id_token)]);
        return new PostResource(true, 'sgdsdg', [$token_explode]);
    }
}
