<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        if (auth('sanctum')->check()) {
            $user_id = auth('sanctum')->user()->id;
            $product_id = $request->product_id;
            $product_quantity = $request->product_quantity;

            $productCheck = Product::where('id', $product_id)->first();
            if ($productCheck) {
                if (Cart::where('product_id', $product_id)->where('user_id', $user_id)->exists()) {
                    return response()->json([
                        'status' => 409,
                        'message' => $productCheck->product_name . "Already Added to Cart",
                    ]);
                } else {
                    $cartItem = new Cart;
                    $cartItem->user_id = $user_id;
                    $cartItem->product_id = $product_id;
                    $cartItem->product_quantity = $product_quantity;
                    $cartItem->save();
                    return response()->json([
                        'status' => 201,
                        'message' => "Added to Cart",
                    ]);
                }
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => "Product not found",
                ]);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => "Login to add to Cart",
            ]);
        }
    }

    public function viewCart(){
        if (auth('sanctum')->check()) {
            $user_id = auth('sanctum')->user()->id;
            $cartItem = Cart::where ('user_id',$user_id)->get();
            return response()->json([
                'status' => 200,
                'cart' => $cartItem,
            ]);


        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => "Login to add to Cart",
            ]); 
        }
    }
}
