
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';


axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import FrontLayout from "./layouts/frontend/FrontLayout";
import Home from "./components/frontend/Home";

import ViewCategory from "./components/frontend/collections/ViewCategory";
import ViewProduct from "./components/frontend/collections/ViewProduct";
import ProductDetails from "./components/frontend/collections/ProductDetails";
import Cart from "./components/frontend/collections/Cart";
import Checkout from "./components/frontend/collections/Checkout";
import Thank from "./components/frontend/collections/Thank";


//backend 
import Dashboard from "./components/admin/Dashboard";
import AddCategory from "./components/admin/Category/Add_Category";
import AllCategory from "./components/admin/Category/All_Category";
import EditCategory from "./components/admin/Category/Edit_Category";

import AddProduct from "./components/admin/Product/Add_Product";
import AllProduct from "./components/admin/Product/All_product";
import EditProduct from "./components/admin/Product/Edit_Product";
import Category from "./components/frontend/Category";
import About from "./components/frontend/About";
import All_Order from "./components/admin/Order/all_order";
import Order_details from "./components/admin/Order/Order_details";









function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          
          <Route path="/" element={< FrontLayout />} />
          <Route path="/frontHome" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/About" element={<About />} />

          {/* //collections */}
          <Route path="/collections" element={<ViewCategory />} />
          <Route path="/collections/:slug" element={<ViewProduct />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<Thank />} />
          
          

           {/* admin routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/allCategory" element={< AllCategory />} />
          <Route path="/admin/addCategory" element={< AddCategory />} />
          <Route path="/admin/edit-category/:id" element={< EditCategory />} />

          {/* product route */}
          <Route path="/admin/AddProduct" element={< AddProduct />} />
          <Route path="/admin/AllProduct" element={< AllProduct />} />
          <Route path="/admin/edit-product/:id" element={< EditProduct />} />

          {/* order route */}
          <Route path="/admin/all_order" element={< All_Order />} />
          <Route path="/admin/order_details/:id" element={<Order_details />} />
         

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
