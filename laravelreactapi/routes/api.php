<?php


use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





Route::post('register',[AuthController::class,'register']);
Route::get('User-register',[AuthController::class,'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
