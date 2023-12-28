<?php

namespace App\Http\Controllers\Vendors\Admin;

use App\Http\Controllers\Controller;
use App\Models\Vendor\ViewPerusahaan;
use App\Models\Vendor\Jajaran;
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
        $data = ViewPerusahaan::where('status_verifikasi', 'review_submit')
                ->orWhere('status_verifikasi', 'review_update')
                ->get();

        return new PostResource(true, 'Request data', $data);
    }
    
    public function listDataUmum($companyId)
    {
        $data = ViewPerusahaan::where('id', $companyId)->first();
        return new PostResource(true, 'List data umum', $data);
    }
    
    public function listJajaran($companyId)
    {
        $data = Jajaran::where('perusahaan_id', $companyId)->get();
        return new PostResource(true, 'List jajaran', $data);
    }

    public function listAkta($companyId)
    {
        $listAkta = Akta::where('id_perusahaan', $companyId)->get();

        for ($a=0; $a < count($listAkta); $a++) { 
           $listAkta[$a]['file_base64'] = base64_encode(file_get_contents(public_path('vendor_file/' . $listAkta[$a]->file_akta)));
        }

        return new PostResource(true, 'List akta', $listAkta);
    }
}
