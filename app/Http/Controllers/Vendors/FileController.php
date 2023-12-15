<?

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor\Akta;
use App\Models\Vendor\ViewPerusahaan;
use App\Models\Vendor\Perusahaan;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;


class AktaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    function uplaodFile(Request $request)
    {   
        if($request->whatfile=='struktur'){
            $file = base64_decode($request->file, true);
            $filename = 'struktur/' .  ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id . '.pdf';
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
    }
}
