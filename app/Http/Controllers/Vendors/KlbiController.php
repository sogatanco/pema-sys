<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor\Klbi;
use App\Models\Vendor\ViewPerusahaan;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;


class IzinController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function store(Request $request)
    {
        $k=new Klbi();
        $k->id_klbi=$request->id_klbi;
        $k->perusahaan_id=ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id;
        if($k->save()){
            return new PostResource(true, 'New Klbi Inserted', []);
        }else{
            return new PostResource(false, 'Failed to insert', []);
        }
        
    }
}