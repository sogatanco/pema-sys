<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JajaranController extends Controller
{
    public function store(Request $request)
    {
        return response()->json([
            "status" => true,
            "message" => 'from jajaran store'
        ], 200);
    }
}
