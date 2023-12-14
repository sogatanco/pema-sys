<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use App\Models\Vendor\MasterBidangUsaha;
use App\Models\Vendor\Perusahaan;
use App\Models\Vendor\BidangUsaha;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;

class PerusahaanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function listBidangUsaha()
    {
        $data = MasterBidangUsaha::select('id_bidang', 'nama_bidang')->get();

        return response()->json([
            "success" => true,
            "data" => $data
        ]);
    }

    public function getDataUmum()
    {
        $user = Auth::user();

        $dataUmum = Perusahaan::where('user_id', $user->id)->first();

        return response()->json([
            "success" => true,
            "data" => $dataUmum
        ]);
    }
    
    public function store(Request $request)
    {
        $data = $request->all();
        
        $validator = Validator::make($request->all(), [
            'email' => ["required"],
            'bidangUsaha' => ["required"],
            'kontak' => ['required'],
            'provinsi' => ['required']
        ]);

        if($validator->fails()){
            throw new HttpResponseException(response([
                "message" => $validator->errors()
            ], 400));
        }

        $newData = [
            'email_alternatif' => $request->email,
            'kontak' => $request->kontak,
            'provinsi' => $request->provinsi,
        ];

        $user = Auth::user();
        $savedData = Perusahaan::where('user_id', $user->id)->update($newData)->first();

        if($savedData){

            // simpan bentuk usaha,
            $savedBidang = BidangUsaha::create(['master_bidangusaha_id' => $request->bidang_usaha, 'perusahaan_id' => $savedData->perusahaan_id]);

            return response()->json([
                "success" => true,
                "data" => $newData
            ]);
        }else{
            throw new HttpResponseException(response([
                "message" => "Something went wrong."
            ], 500));
        }
    }

    public function uploadStrukturOrganisasi(Request $request, $companyId)
    {
        $data = $request->all();

        // save to db

        return response()->json([
            "success" => true,
            "data" => $data
        ]);
    }
}
