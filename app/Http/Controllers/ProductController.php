<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('product.index', compact('products'));

        // return response()->json([
        //     "success" => true,
        //     "message" => "Product list",
        //     "data" => $products
        // ]);
    }

    public function store(Request $req)
    {
        $req->validate([
            "name" => "required",
            "price" => "required",
            "quantity" => "required"
        ]);
        $product = new Product([
            "name" => $req->get("name"),
            "price" => $req->get("price"),
            "quantity" => $req->get("quantity")
        ]);
        $res = $product->save();
        return response()->json([
            "success" => true,
            "message" => "Product created successfully",
            "data" => $res
        ]);
    }

    /**
     * Only update quantity of product
     * @param Request $req
     * @param mixed $id
     * @return void
     */
    public function update(Request $req, $id)
    {
        $req->validate([
            "quantity" => "required"
        ]);
        $product = Product::find($id);
        $product->quantity = $req->get('quantity');
        $product->save();
        return response()->json([
            "success" => true,
            "message" => "Product updated successfully",
            "data" => $product
        ]);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

    }
}
