<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use JWTAuth;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserRegisterRequest;
use App\Models\UserVendor;
use App\Models\Employe;

class Auth2Controller extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor', ['except' => ['login', 'register', 'welcome']]);
    }

    public function register(userRegisterRequest $request): userResource
    {
        $data = $request->validated();

        if(UserVendor::where('email', $data['email'])->count() == 1){
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

        $user = new User($data);
        $user->roles = $defaultRole;
        $user->password = Hash::make($data['password']);

        $user->save();

        return new UserResource($user);

    }

    public function login(Request $request) 
    {
        
         $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if($validator->fails()){
            throw new HttpResponseException(response([
                "message" => $validator->errors()
            ], 400));
        }

        $token = Auth::guard('api_vendor')->attempt(['email' => $request->email, 'password' => $request->password]);
        
         if(!$token){
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
}
