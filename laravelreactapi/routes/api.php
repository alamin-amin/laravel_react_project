<?php


use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\categoryController;
use App\Http\Controllers\API\FrontendController;
use App\Http\Controllers\API\placeOrderController;
use App\Http\Controllers\API\ProductController;
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
Route::get('fetchproduct/{slug}',[FrontendController::class,'product']);

Route::get('product-details/{id}',[FrontendController::class,'productDetails']);
Route::post('add-to-cart',[CartController::class,'addToCart']);
Route::get('cart',[CartController::class,'viewCart']);
Route::put('cart-updateQty/{cart_id}/{scope}',[CartController::class,'updateQuantity']);
Route::delete('delete-cart-product/{cart_id}',[CartController::class,'deleteCartItem']);

Route::post('place-order',[placeOrderController::class,'placeOrdet']);
Route::get('/admin-orders',[placeOrderController::class,'index']);
Route::get('/admin-order-details',[placeOrderController::class,'oderDetails']);




// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
