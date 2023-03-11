@extends('products.layout')


@section('content')
  <div class="row">
    <div class="App">
      <header class="mb-3 border-bottom">
          <div class="navbar navbar-expand-lg navbar-dark bg-light">
              <img src="{{asset('images/yicon.svg')}}" alt="logo" width="38" height="38" />
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li><a class="nav-link px-2 active" href="#">Home</a></li>
                  <li><a class="nav-link px-2 " href="#">Products</a></li>
              </ul>
          </div>
      </header>

      <div class="form col-12">
        <div class="card ">
            <div class="card-body">
                <div class="card-text">
                    <h1 class="float-left">Item</h1>
                    <div class="row">
                        <div class="col-4">
                            <div class="form-floating ">
                                <select class="form-select" id="product" name="product">
                                  <option value="0">Select product</option>
                                  @foreach($products as $product)
                                    <option value={{$product->id}} data-price={{$product->price}}>{{$product->name}}</option>
                                  @endforeach
                                </select>
                                <label for="product" class="">Product</label>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="mb-3 form-floating">
                                <input type="number" class="form-control" disabled id="price" name="price" value="">
                                <label for="price" class="">Unit Price</label>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="mb-3 form-floating  ">
                                <input type="number" class="form-control" id="quantity" name="quantity" value="">
                                <label for="quantity" class="">Quantity</label>
                            </div>
                        </div>
                        <div class="col-2">
                            <input class="btn btn-primary" type="button" id="addBtn" value="Add">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="form col-12">
          <div class="card ">
              <div class="card-body">
                  <div class="card-text">
                      <div class="row">
                          <div class="col-4">
                              <div class="mb-3 form-floating  ">
                                  <input type="number" class="form-control " id="receive" name="receive" value="0">
                                  <label for="receive" class="">Received Cash</label>
                              </div>
                          </div>
                          <div class="col-3">
                              <div class="mb-3 form-floating  ">
                                  <input type="number" class="form-control " id="total" disabled name="total" value="0">
                                  <label for="total" class="">Total price</label>
                              </div>
                          </div>
                          <div class="col-3">
                              <div class="mb-3 form-floating  ">
                                  <input type="number" class="form-control " id="return" name="return" value="0">
                                  <label for="return" class="">Returned Cash</label>
                              </div>
                          </div>
                          <div class="col-2">
                              <button class="btn btn-primary" type="button" id="calBtn">Calculate</button>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-12" id="exchange"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="application" id="productList">
      </div>
      <div class="row">
          <div class="col-10"></div>
          <div class="col-2">
              <button class="btn btn-outline-primary" type="button">Print Invoice</button>
          </div>
      </div>

      <footer class="py-5">
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2023 Thi Hong Yen Truong. All rights reserved.</p>
              <ul class="list-unstyled d-flex">
                  <li class="ms-3">
                      <a class="link-dark" href="https://github.com/truthblue82">
                      <img src="{{asset('images/github.svg')}}" class="bi" width="24" height="24"></a>
                  </li>
              </ul>
          </div>
      </footer>
    </div>

  </div>
<!-- <h2>Purchased List</h2>
          <table class="table table-sm table-bordered" id="productTbl" >
              <thead>
                  <tr>
                      <th colspan="1" class="float-right">#</th>
                      <th colspan="1" class="center">Product</th>
                      <th colspan="1" class="float-right">Unit cost</th>
                      <th colspan="1" class="float-right">Quantity</th>
                      <th colspan="1" class="float-right">Total</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="float-right">1</td>
                      <td class="center">product 1</td>
                      <td class="float-right">13</td>
                      <td class="float-right">2</td>
                      <td class="float-right">26</td>
                  </tr>
                  <tr>
                      <td class="float-right">2</td>
                      <td class="center">product 2</td>
                      <td class="float-right">15</td>
                      <td class="float-right">1</td>
                      <td class="float-right">15</td>
                  </tr>
                  <tr>
                      <td class="float-right">3</td>
                      <td class="center">product 3</td>
                      <td class="float-right">9</td>
                      <td class="float-right">3</td>
                      <td class="float-right">27</td>
                  </tr>
              </tbody>
          </table> -->
