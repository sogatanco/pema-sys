<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor\Akta;
use App\Models\Vendor\ViewPerusahaan;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;

class AktaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function store(Request $request)
    {
        return new PostResource(false, 'dsgsdg', Auth::user());
        // $file = base64_decode($request->file, true);
        // $filename = 'akta/' . time() . '.pdf';
        // if (Storage::disk('public_vendor')->put($filename, $file)) {
        //     $akt = new Akta();
        //     $akt->id_perusahaan = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first();
        //     $akt->no_akta = $request->no_akta;
        //     $akt->tgl_terbit = $request->tgl_terbit;
        //     $akt->nama_notaris = $request->nama_notaris;
        //     $akt->file_akta = $filename;
        //     if($akt->save()){
        //         return new PostResource(true, 'dsgsdg', []);
        //     }else{
        //         return new PostResource(false, 'dsgsdg', []);
        //     }   
        // }else{
        //     return new PostResource(false, 'dsgsdg', []);
            
        // }
    }
}
