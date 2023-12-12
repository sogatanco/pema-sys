<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Vendors\UserController;
use App\Http\Controllers\Vendors\CompanyController;

Route::controller(UserController::class)->group(function() {
    Route::get('user', 'index');
    Route::post('user/register-company', 'registerCompany');
});

Route::controller(CompanyController::class)->group(function() {
    Route::get('company/list-bidang-usaha', 'listBidangUsaha');
});