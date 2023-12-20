<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart (Request $request){
        if(auth('sanctum')->check())
        {
            return response()->json([
                'status'=>201,
                'message'=>"I am in Cart",
            ]);

        }
        else
        {
            return response()->json([
                'status'=>401,
                'message'=>"Login to add to Cart",
            ]);
        }

    }
}
