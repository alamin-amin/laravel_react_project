<?php


use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\categoryController;
use App\Http\Controllers\API\FrontendController;
use App\Http\Controllers\API\ProductController;
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
Route::delete('/delete-category/{id}',[categoryController::class,'destroy']);
Route::get('/all-category',[categoryController::class,'allCategory']);

// product route
Route::post('/add-product',[ProductController::class,'storeProduct']);
Route::get('/all-product',[ProductController::class,'index']);
Route::get('edit-product/{id}',[ProductController::class,'edit']);
Route::delete('/delete-product/{id}',[ProductController::class,'destroy']);


Route::get('getCategory',[FrontendController::class,'getCategory']);




// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
