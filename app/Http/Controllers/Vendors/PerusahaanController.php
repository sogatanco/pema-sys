<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use App\Models\Vendor\MasterBidangUsaha;
use Illuminate\Http\Request;

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

    public function getDataPerusahaan($companyId)
    {
        return response()->json([
            "success" => true,
            "data" => $data
        ]);
    }
    
    public function store(Request $request)
    {
        $data = $request->all();

        // save to db

        return response()->json([
            "success" => true,
            "data" => $data
        ]);
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
