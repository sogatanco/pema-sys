<?php

namespace App\Http\Controllers\Vendors\Admin;

use App\Http\Controllers\Controller;
use App\Models\Vendor\Tender;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\PostResource;

class ATenderController extends Controller
{
    function store(Request $request)
    {
        $t = new Tender();
        $t->user_id = $request->user_id;
        $t->pilihan_tender = $request->pilihan_tender;
        $t->metode_pengadaan = $request->metode_pengadaan;
        $t->sistem_kualifikasi = $request->sistem_kualifikasi;
        $t->nama_tender = $request->nama_tender;
        $t->lokasi = $request->lokasi;
        $t->tgl_pendaftaran = $request->tgl_pendaftaran;
        $t->batas_pendafaran = $request->batas_pendafaran;
        // $t->masa_sanggah = $request->masa_sanggah;
        // $t->tgl_masa_sanggah = $request->tgl_masa_sanggah;
        $t->jenis_pengadaan = $request->jenis_pengadaan;
        $t->hpd = $request->hps;
        $t->kbli = $request->kbli;
        $t->centang_dok_wajib = json_encode($request->centang_dok_wajib);
        $t->dok_tender = $request->dok_tender;
        $t->dok_deskripsi_tender = $request->dok_deskripsi_tender;

        if($t->save()){
            return new PostResource(true, 'Tender Inserted !', []);
        }else{
            return new PostResource(false, 'Failed Tender Insert !', []);
        }

        $file_dok_tender = base64_decode($request->dok_tender, true);
        $file_dok_deskripsi_tender = base64_decode($request->dok_deskripsi_tender, true);

        $dok_tender = 'dok_tender/' . time().'.pdf';
        $dok_deskripsi_tender = 'dok_deskripsi_tender/' . time(). '.pdf';

        if (Storage::disk('public_vendor')->put($dok_tender, $file_dok_tender) && Storage::disk('public_vendor')->put($dok_deskripsi_tender, $file_dok_deskripsi_tender)) {
            $t = new Tender();
            $t->user_id = $request->user_id;
            $t->pilihan_tender = $request->pilihan_tender;
            $t->metode_pengadaan = $request->metode_pengadaan;
            $t->sistem_kualifikasi = $request->sistem_kualifikasi;
            $t->nama_tender = $request->nama_tender;
            $t->lokasi = $request->lokasi;
            $t->tgl_pendaftaran = $request->tgl_pendaftaran;
            $t->batas_pendafaran = $request->batas_pendafaran;
            // $t->masa_sanggah = $request->masa_sanggah;
            // $t->tgl_masa_sanggah = $request->tgl_masa_sanggah;
            $t->jenis_pengadaan = $request->jenis_pengadaan;
            $t->hpd = $request->hps;
            $t->kbli = $request->kbli;
            $t->centang_dok_wajib = json_encode($request->centang_dok_wajib);
            $t->dok_tender = $dok_tender;
            $t->dok_deskripsi_tender = $dok_deskripsi_tender;

            if($t->save()){
                return new PostResource(true, 'Tender Inserted !', []);
            }
            return new PostResource(false, 'Failed Tender Insert !', []);
        }
        return new PostResource(false, 'Failed Tender Insert !', []);
    }

    function index(){
        $data=Tender::get();
        return new PostResource(true, 'List Tender', $data);
    }
}
