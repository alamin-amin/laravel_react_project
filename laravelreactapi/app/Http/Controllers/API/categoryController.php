<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class categoryController extends Controller
{

    public function index(){
        $category = Category::all();
        return response()->json([
            'status'=>200,
            'category'=>$category,
        ]);
    }
   public function addCategory(Request $request){
        $validator = Validator::make($request->all(),[
            'categoryName'=>'Required',
            'slug'=>'Required',
            'status'=>'Required',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else{

        $category = new Category;
        $category->categoryName = $request->input('categoryName');
        $category->slug = $request->input('slug');
        $category->status = $request->input('status');
        $category->save();
        return response()->json([
            'status'=>200,
            'message'=>'Category added successfully',
        ]);

     }
    }

    public function editCategory($id){
        $category= Category::find($id);
        if($category){
            return response()->json([
                'status'=>200,
                'category'=>$category,
            ]);
    
        }else{
            return response()->json([
                'status'=>400,
                'message'=>'Category not found',
            ]);
        }
    }

    public function destroy($id){
        $category = Category::find($id);
        if($category){
            $category->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Category delete successfully',
            ]);
        }else{
            return response()->json([
                'status'=>400,
                'message'=>'Category not found',
            ]);
        }

    }
}
