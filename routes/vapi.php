<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Vendors\UserController;
use App\Http\Controllers\Vendors\PerusahaanController;
use App\Http\Controllers\Vendors\JajaranController;

Route::middleware('auth:api')->get('/uservendor', function (Request $request) {
    return $request->user();
});

Route::controller(UserController::class)->group(function() {
    Route::get('user', 'index');
    Route::post('user/register-company', 'registerCompany');
});

Route::controller(PerusahaanController::class)->group(function() {
    Route::get('perusahaan/list-bidang-usaha', 'listBidangUsaha');
    Route::post('perusahaan/store', 'store');
});

Route::controller(JajaranController::class)->group(function() {
    Route::post('jajaran/store', 'store');
    Route::post('jajaran/edit/{id}', 'edit');
});