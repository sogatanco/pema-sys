<?

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

    function uplaodFile(Request $request)
    {
        $file = base64_decode($request->file, true);
        if($request->whatfile=='struktur'){
            $filename = 'struktur/' . time() . '.pdf';
            if (Storage::disk('public_vendor')->put($filename, $file)) 
        }
    }
}
