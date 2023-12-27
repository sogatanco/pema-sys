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

    public function submit()
    {
        return new PostResource(true, 'From submit dokumen endpoin', null);
    }
}
