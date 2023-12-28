<?php

namespace App\Http\Controllers\Vendors\Admin;

use App\Http\Controllers\Controller;
use App\Models\Vendor\ViewPerusahaan;
use App\Http\Resources\PostResource;

class APerusahaanController extends Controller
{
    function index()
    {
        $data=ViewPerusahaan::get();
        return new PostResource(true, 'list data Perusahaan', $data);
    }

    function show($id){
        $data=ViewPerusahaan::where('id', $id)->first();
        return new PostResource(true, 'Data Perusahaan '.$id, $data);
    }

    public function requestList()
    {
        $data = ViewPerusahaan::where('status_verifikasi', 'review')->get();
        return new PostResource(true, 'Request data', $data);
    }
}
