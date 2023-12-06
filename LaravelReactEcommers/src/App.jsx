
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

//backend 
import Dashboard from "./components/admin/Dashboard";
import AddCategory from "./components/admin/Category/Add_Category";
import AllCategory from "./components/admin/Category/All_Category";
import EditCategory from "./components/admin/Category/Edit_Category";






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={< Login />} />
          <Route path="/register" element={< Register />} />
          
          <Route path="/" element={< FrontLayout />} />
          <Route path="/frontHome" element={<Home />} />


           {/* admin routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/allCategory" element={< AllCategory />} />
          <Route path="/admin/addCategory" element={< AddCategory />} />
          <Route path="/admin/edit-category/:id" element={< EditCategory />} />
          

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
