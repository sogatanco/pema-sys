<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JajaranController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function store(Request $request)
    {
        $data = $request->all();
        return response()->json([
            "status" => true,
            "data" => $data,
            "companyId" => Auth::user()
        ], 200);
    }
}
