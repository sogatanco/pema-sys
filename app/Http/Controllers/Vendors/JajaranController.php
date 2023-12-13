<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor\Jajaran;
use App\Models\Vendor\ViewPerusahaan;

class JajaranController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function store(Request $request)
    {
        $jjr=new Jajaran();
        $jjr->perusahaan_id=ViewPerusahaan::where('user_id',Auth::user()->id )->get()->first()->id;
        $jjr->nama=$request->nama;
        $jjr->jabatan=$request->jabatan;
        $jjr->no_npwp_direksi=$request->no_npwp_direksi;
        if($jjr->save()){
            return response()->json([
                "status" => true,
                "data" => $jjr,
                "companyId" => Auth::user()->id
            ], 200);
        }
        }
        
}
