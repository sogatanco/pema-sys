<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Vendors\UserController;

Route::controller(UserController::class)->group(function() {
    Route::get('user', 'index');
    Route::post('user/register-company', 'registerCompany');
    Route::get('user/list-bidang-usaha', 'listBidangUsaha');
});