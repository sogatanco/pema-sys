<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use App\Http\Models\Vendor\MasterBidangUsaha;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function listBidangUsaha()
    {
        return response()->json([
            "message" => 'from list bidang usaha'
        ]);
    }
}
