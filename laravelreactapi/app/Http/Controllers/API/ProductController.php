<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function storeProduct(Request $request){
        $validator = Validator::make($request->all(), [
            'category_id'=>'required',
            'product_name'=>'required',
            'slug'=>'required',
            'brand'=>'required',
            'selling_price'=>'required',
            'buying_price'=>'required',
            'quantity'=>'required',
            'image'=>'required',
            'status'=>'required',
            // 'image'=>'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);
        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }else{
            $product = new Product;
            $product->category_id = $request->input('category_id');
            $product->product_name = $request->input('product_name');
            $product->slug = $request->input('slug');
            $product->brand = $request->input('brand');
            $product->selling_price = $request->input('selling_price');
            $product->buying_price = $request->input('buying_price');
            $product->quantity = $request->input('quantity');
            if($request->hasFile('image')){
                $file = $request->file('image');
                $extention = $file->getClientOriginalExtension();
                $fileName = time().'.'.$extention;
                $file->move('uploads/product/',$fileName);
                $product->image ='uploads/product/'.$fileName;
            }
            $product->save();
            $product->status = $request->input('status') == true ? '1' : '0';

            return response()->json([
                'status'=>200,
                'message'=>'Product added successfully',
            ]);
        }
    }
}
