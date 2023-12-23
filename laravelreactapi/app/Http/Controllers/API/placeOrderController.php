<?php

namespace App\Http\Controllers\API;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class placeOrderController extends Controller
{
    public function placeOrdet(Request $request)
    {
        if (auth('sanctum')->check()) {
            $validator = Validator::make($request->all(), [
                'firstname' => 'required',
                'lastname' => 'required',
                'phone' => 'required',
                'email' => 'required',
                'address' => 'required',
                'city' => 'required',
                'state' => 'required',
                'zipcode' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages(),
                ]);
            } else {
                $user_id = auth('sanctum')->user()->id;
                $order = new Order;
                $order->user_id = $user_id;
                $order->firstname = $request->firstname;
                $order->lastname = $request->lastname;
                $order->phone = $request->phone;
                $order->email = $request->email;
                $order->address = $request->address;
                $order->city = $request->city;
                $order->state = $request->state;
                $order->zipcode = $request->zipcode;

                $order->payment_mode = "Bkash";
                $order->tracking_no = 'alamin' . rand(1111, 9999);
                $order->save();

                $cart = Cart::where('user_id', $user_id)->get();

                $orderItem = [];
                foreach ($cart as $item) {
                    $orderItem[] = [
                        'product_id' => $item->product_id,
                        'quantity' => $item->product_quantity,
                        'price' => $item->product->selling_price,
                    ];
                    $item->product->update([
                        'quantity' => $item->product->quantity - $item->product_quantity,
                    ]);
                }
                $order->orderitems()->createMany($orderItem);
                Cart::destroy($cart);

                return response()->json([
                    'status' => 200,
                    'message' => "Order Placed Successfully",
                ]);
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => "Login to Continue",
            ]);
        }
    }

    public function index(){
        $orders = Order::all();
        return response()->json([
            'status'=>200,
            'orders'=>$orders
        ]);
    }
}
