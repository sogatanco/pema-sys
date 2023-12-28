<?php

namespace App\Http\Controllers\Vendors\Admin;

use App\Http\Controllers\Controller;
use App\Models\Vendor\Perusahaan;
use App\Models\Vendor\ViewPerusahaan;
use App\Models\Vendor\Jajaran;
use App\Models\Vendor\Akta;
use App\Models\Vendor\Izin;
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
        $data['jajaran'] = Jajaran::where('perusahaan_id', $companyId)->get();

        $struktur = ViewPerusahaan::where('id', $companyId)->get()->first()->struktur_organisasi;

        if (file_exists(public_path('vendor_file/' . $struktur))){
            $base64 = base64_encode(file_get_contents(public_path('vendor_file/' . $struktur)));
            $filename = 'struktur.pdf';
        } else {
            $base64 = null;
            $filename = null;
        }

        $data['struktur_filename'] = $filename;
        $data['struktur_base64'] = $base64;

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

    public function listIzin($companyId)
    {
        $listIzin = Izin::where('perusahaan_id', $companyId)->get();

        for ($i=0; $i < count($listIzin); $i++) { 
           $listIzin[$i]['file_base64'] = base64_encode(file_get_contents(public_path('vendor_file/' . $listIzin[$i]->file_izin)));
        }

        return new PostResource(true, 'List izin', $listIzin);
    }

    public function listDokumen($companyId)
    {
        $data = Perusahaan::where('id', $companyId)->first();
        
        $docs = [];
        $list = ['company_profile', 'ktp_pengurus'];

        for ($l=0; $l < count($list); $l++) { 
            if (file_exists(public_path('vendor_file/' . $data[$list[$l]]))){
                $item[$l] = [
                    "name" => $list[$l],
                    "base_64" => base64_encode(file_get_contents(public_path('vendor_file/' . $data[$list[$l]])))
                ];
                array_push($docs, $item[$l]);
            }
        }

        // // file company profil 
        // if (file_exists(public_path('vendor_file/' . $data->company_profile))){
        //     $profil = [
        //         "name" => "profil",
        //         "base_64" => base64_encode(file_get_contents(public_path('vendor_file/' . $data->company_profile)))
        //     ];
        //     array_push($docs, $profil);
        // }

        // // file ktp
        // if (file_exists(public_path('vendor_file/' . $data->ktp_pengurus))){
        //     $ktp = [
        //         "name" => "ktp",
        //         "base_64" => base64_encode(file_get_contents(public_path('vendor_file/' . $data->ktp_pengurus)))
        //     ];
        //     array_push($docs, $ktp);
        // }

        // // file sk kemenkumham
        // if (file_exists(public_path('vendor_file/' . $data->sk_kemenkumham))){
        //     $sk_kemenkumham = [
        //         "name" => "sk_kemenkumham",
        //         "base_64" => base64_encode(file_get_contents(public_path('vendor_file/' . $data->sk_kemenkumham)))
        //     ];
        //     array_push($docs, $sk_kemenkumham);
        // }

        // // file fakta integritas
        // if (file_exists(public_path('vendor_file/' . $data->fakta_integritas))){
        //     $fakta_integritas = [
        //         "name" => "fakta_integritas",
        //         "base_64" => base64_encode(file_get_contents(public_path('vendor_file/' . $data->fakta_integritas)))
        //     ];
        //     array_push($docs, $fakta_integritas);
        // }

        // // file spt
        // if (file_exists(public_path('vendor_file/' . $data->spt))){
        //     $spt = [
        //         "name" => "spt",
        //         "base_64" => base64_encode(file_get_contents(public_path('vendor_file/' . $data->spt)))
        //     ];
        //     array_push($docs, $spt);
        // }

        return new PostResource(true, 'List dokumen', $docs);
    }
}
