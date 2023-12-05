<?php


use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\categoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





Route::post('register',[AuthController::class,'register']);

Route::post('/add-category',[categoryController::class,'addCategory']);
Route::get('/all-category',[categoryController::class,'index']);




// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
