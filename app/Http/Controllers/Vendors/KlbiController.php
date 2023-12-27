<?php

namespace App\Http\Controllers\Vendors;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Vendor\Kbli;
use App\Models\Vendor\ViewKbli;
use App\Models\Vendor\MasterKbli;
use App\Models\Vendor\ViewPerusahaan;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Exceptions\HttpResponseException;

class KlbiController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api_vendor');
    }

    public function store(Request $request)
    {
        $k=new Kbli();
        $k->id_kbli=$request->id_kbli;
        $k->perusahaan_id=ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id;
        if($k->save()){
            return new PostResource(true, 'New Klbi Inserted', []);
        }else{
            return new PostResource(false, 'Failed to insert', []);
        }
        
    }

    public function myKbli(){
        $data=ViewKbli::where('perusahaan_id',ViewPerusahaan::where('user_id', Auth::user()->id)->get()->first()->id )->get();
        return new PostResource(true, 'My Kbli', $data);
    }
    
    public function list()
    {
        $data = MasterKbli::get();
        return new PostResource(true, 'List Kbli', $data);
    }

    public function delete($id)
    {
        $deleted = Kbli::find($id)->delete();

        if($deleted){
            return new PostResource(true, 'Kbli has been deleted.', $data);
        }else{
            throw new HttpResponseException(response([
                "message" => "Something went wrong."
            ], 500));
        }
    }
}