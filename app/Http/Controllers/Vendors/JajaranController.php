<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JajaranController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function store(Request $request, $companyId)
    {
        $data = $request->all();

        return response()->json([
            "status" => true,
            "data" => $data,
            "companyId" => $companyId
        ], 200);
    }
}
