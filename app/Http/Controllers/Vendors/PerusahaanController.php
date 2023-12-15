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

        $dataUmum = Perusahaan::select(
                    'perusahaan.nama_perusahaan', 
                    'perusahaan.nomor_registrasi', 
                    'perusahaan.tipe',
                    'perusahaan.bentuk_usaha',
                    'perusahaan.email_alternatif',
                    'perusahaan.no_npwp',
                    'perusahaan.hp',
                    'perusahaan.alamat',
                    'perusahaan.provinsi',
                    'master_bidangusaha.id_bidang',
                    'master_bidangusaha.nama_bidang'
                    )
                    ->where('user_id', $user->id)
                    ->leftJoin('bidang_usaha', 'bidang_usaha.perusahaan_id', '=', 'perusahaan.id')
                    ->leftJoin('master_bidangusaha', 'master_bidangusaha.id_bidang', '=', 'bidang_usaha.master_bidangusaha_id')
                    ->first();

        return response()->json([
            "success" => true,
            "data" => $dataUmum
        ]);
    }
    
    public function store(Request $request)
    {
        $data = $request->all();
        
        $validator = Validator::make($request->all(), [
            'email_alternatif' => ["required"],
            'no_npwp' => ['required'],
            'id_bidang' => ["required"],
            'hp' => ['required'],
            'alamat' => ['required'],
            'provinsi' => ['required']
        ]);

        if($validator->fails()){
            throw new HttpResponseException(response([
                "errors" => $validator->errors(),
                "message" => "Semua kolom wajib diisi dan tidak boleh ada yang kosong."
            ], 400));
        }

        // upload file

        $newData = [
            'email_alternatif' => $request->email_alternatif,
            'no_npwp' => $request->no_npwp,
            'hp' => $request->kontak,
            'alamat' => $request->alamat,
            'provinsi' => $request->provinsi,
        ];

        $user = Auth::user();
        $company = Perusahaan::where('user_id', $user->id)->first();
        $savedData = Perusahaan::where('user_id', $user->id)->update($newData);

        if($savedData){

            // simpan bentuk usaha,
            $savedBidang = BidangUsaha::create(['master_bidangusaha_id' => $request->id_bidang, 'perusahaan_id' => $company->id]);

            return response()->json([
                "status" => true,
                "message" => "Update data success."
            ]);
        }else{
            throw new HttpResponseException(response([
                "message" => "Something went wrong."
            ], 500));
        }
    }

}
