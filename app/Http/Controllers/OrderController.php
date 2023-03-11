<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return view('order.index', compact('orders'));

        // return response()->json([
        //     "success" => true,
        //     "message" => "Product list",
        //     "data" => $products
        // ]);
    }
    public function store(Request $req)
    {
        $req->validate([
            "total" => "required",
            "received_cash" => "required",
            "return_cash" => "required"
        ]);
        $order = new Order([
            "total" => $req->get("total"),
            "received_cash" => $req->get("received_cash"),
            "return_cash" => $req->get("return_cash")
        ]);
        $res = $order->save();
        //store order item'product_id','order_id','quantity'
        $req->validate([
            'items' => 'required'
        ]);
        foreach ($req->get('items') as $item) {
            $orderItem = new OrderItem([
                "order_id" => $order->id(),
                "product_id" => $req->get('id'),
                "quantity" => $req->get('quantity')
            ]);
            $orderItem->save();
        }
        return response()->json([
            "success" => true,
            "message" => "Order created successfully",
            "data" => $res
        ]);
    }
}
