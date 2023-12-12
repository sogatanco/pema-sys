<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            "message" => "from user vendor endpoint"
        ], 200);
    }

    public function registerCompany(Request $request) 
    {
        return response()->json([
            "data" => $request->all(),
        ],200);
    }
}
