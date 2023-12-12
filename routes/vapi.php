<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Vendors\UserController;
use App\Http\Controllers\Vendors\PerusahaanController;

Route::controller(UserController::class)->group(function() {
    Route::get('user', 'index');
    Route::post('user/register-company', 'registerCompany');
});

Route::controller(PerusahaanController::class)->group(function() {
    Route::get('perusahaan/list-bidang-usaha', 'listBidangUsaha');
    Route::post('perusahaan/store', 'store');
});