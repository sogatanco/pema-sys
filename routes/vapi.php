<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Vendors\UserController;
use App\Http\Controllers\Vendors\PerusahaanController;
use App\Http\Controllers\Vendors\JajaranController;
use App\Http\Controllers\Vendors\AktaController;
use App\Http\Controllers\Vendors\FileController;
use App\Models\Vendor\Akta;

Route::middleware('auth:api_vendor')->get('/uservendor', function (Request $request) {
    return $request->user();
});

Route::controller(UserController::class)->group(function() {
    Route::get('user', 'index');
    Route::post('user/register-company', 'registerCompany');
});

Route::controller(PerusahaanController::class)->group(function() {
    Route::get('perusahaan/list-bidang-usaha', 'listBidangUsaha');
    Route::get('perusahaan/data-umum', 'getDataUmum');
    Route::post('perusahaan/store', 'store');
});

Route::controller(JajaranController::class)->group(function() {
    Route::post('jajaran/store', 'store');
    Route::post('jajaran/edit/{id}', 'edit');
    Route::get('jajaran/my', 'myDirek');
    Route::post('jajaran/delete/{id}', 'deleteDir');
});

Route::controller(AktaController::class)->group(function() {
    Route::post('akta/store', 'store');
    Route::get('akta/view', 'viewFile');
    Route::get('akta/delete/{id}', 'deleteAkta');
});

Route::controller(FileController::class)->group(function(){
    Route::post('file/upload','uplaodFile' );
});