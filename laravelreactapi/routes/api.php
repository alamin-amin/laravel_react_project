<?php


use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\categoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





Route::post('login',[AuthController::class,'userLogin']);
Route::post('register',[AuthController::class,'register']);


Route::middleware(['auth:sanctum'])->group( function() {
    Route::post('logout',[AuthController::class,'logout']);
});

Route::post('/add-category',[categoryController::class,'addCategory']);
Route::get('/all-category',[categoryController::class,'index']);
Route::get('/edit-category/{id}',[categoryController::class,'editCategory']);




// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
