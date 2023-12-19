<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor\Akta;
use App\Models\Vendor\ViewPerusahaan;
use App\Models\Vendor\Perusahaan;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;


class FileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    function viewFile(){
        $p=Perusahaan::where('user_id', Auth::user()->id)->get()->first();
        $doc['company_profil']=null;
        $doc['company_profil_base64']=null;
        if (file_exists(public_path('vendor_file/' . $p->company_profile))){
            $doc['company_profil']='company_profile.pdf';
            $doc['company_profil_base64']=base64_encode(file_get_contents(public_path('vendor_file/' . $p->company_profile)));
        }
        $doc['ktp_pengurus']=null;
        $doc['ktp_pengurus_base64']=null;
        if (file_exists(public_path('vendor_file/' . $p->ktp_pengurus))){
            $doc['ktp_pengurus']='ktp_pengurus.pdf';
            $doc['ktp_pengurus_base64']=base64_encode(file_get_contents(public_path('vendor_file/' . $p->ktp_pengurus)));
        }
        $doc['sk_kemenkumham']=null;
        $doc['sk_kemenkumham_base64']=null;
        if (file_exists(public_path('vendor_file/' . $p->sk_kemenkumham))){
            $doc['sk_kemenkumham']='sk_kemenkumham.pdf';
            // $doc['sk_kemenkumham_base64']=base64_encode(file_get_contents(public_path('vendor_file/' . $p->sk_kemenkumham)));
        }
        return new PostResource(true, 'Dokumen Perusahaan', $doc);
    }

    function uplaodFile(Request $request)
    {   
        if($request->whatfile=='struktur'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/struktur.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->struktur_organisasi=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }
        else if($request->whatfile=='profil'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/company_profile.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->company_profile=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }
        else if($request->whatfile=='logo'){
            $dataImage = explode(',', $request->file);
            $file=base64_decode($dataImage[1], true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/logo.png';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->logo_perusahaan=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }
        else if($request->whatfile=='npwp'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/npwp.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->file_npwp=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }

        else if($request->whatfile=='pvd'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/pvd.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->file_pvd=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }

        else if($request->whatfile=='ktp'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/ktp_pengurus.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->ktp_pengurus=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }

        else if($request->whatfile=='spt'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/spt.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->spt=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }
        else if($request->whatfile=='pph'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/pph.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->pph=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }
        else if($request->whatfile=='lap_keuangan'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/lap_keuangan.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->lap_keuangan=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }
        else if($request->whatfile=='rek_koran'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/rek_koran.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->rek_koran=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }else if($request->whatfile=='fakta_integritas'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/fakta_integritas.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->fakta_integritas=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }else if($request->whatfile=='sk_kemenkumham'){
            $file = base64_decode($request->file, true);
            $filename = ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id .'/sk_kemenkumham.pdf';
            if(Storage::disk('public_vendor')->put($filename, $file)){
                $p=Perusahaan::find(ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id);
                $p->sk_kemenkumham=$filename;
                if($p->save()){
                    return new PostResource(true, "Upload ".$request->whatfile." Berhasil", []);
                }else{
                    return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
                }
            }else{
                return new PostResource(false, "Upload ".$request->whatfile." Gagal", []);
            }
        }
        else{
            return new PostResource(false, "Please Define what file on request", []);
        }

    }
}
