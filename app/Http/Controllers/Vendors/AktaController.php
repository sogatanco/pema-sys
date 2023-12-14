<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor\Akta;
use App\Models\Vendor\ViewPerusahaan;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;

use File;
use Response;

class AktaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function store(Request $request)
    {
        $file = base64_decode($request->file, true);
        $filename = 'akta/' . time() . '.pdf';
        if (Storage::disk('public_vendor')->put($filename, $file)) {
            $akt = new Akta();
            $akt->id_perusahaan = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id;
            $akt->no_akta = $request->no_akta;
            $akt->tgl_terbit = $request->tgl_terbit;
            $akt->nama_notaris = $request->nama_notaris;
            $akt->file_akta = $filename;
            $akt->jenis=$request->jenis;
            if ($akt->save()) {
                return new PostResource(true, 'New Akta Inserted', []);
            } else {
                return new PostResource(false, 'Failed to add akta', []);
            }
        } else {
            return new PostResource(false, 'Failed to upload akta', []);
        }
    }

    public function viewFile($id)
    {

        $filename = Akta::where('id_akta', $id)->first();
        if ($filename->id_perusahaan == ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id) {
            $filename->file_base64 = base64_encode(file_get_contents(public_path('vendor_file/' . $filename->file_akta)));
            return new PostResource(true, 'Detail Akta ' . $id, $filename);
        } else {
            return new PostResource(false, 'Not Permitted', []);
        }
    }

    public function deleteAkta($id)
    {
        $akta = Akta::where('id_akta', $id)->first();
        if ($akta->id_perusahaan == ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id) {
            if ($akta->delete()) {
                return new PostResource(true, 'Deleted Succesfully', []);
            }
        } else {
            return new PostResource(false, 'Not Permitted', []);
        }
    }
}
