<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index(){
        return ('a.asdfsdg');
    }
    public function register (Request $request){
        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'email'=>'required|email|max:191|unique:users,email',
            'password'=>'required|min:8',
        ]);
        if( $validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);

        }else{
           $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
           ]) ;
            $token = $user->createToken($user->email.'_Token')->plainTextToken;
            return response()->json([
            'status'=>200,
            'username'=>$user->name,
            'token'=>$token,
            'massage'=>'Registered Successfully',
        ]);

        }

    }
}