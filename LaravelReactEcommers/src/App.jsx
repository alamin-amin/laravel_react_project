
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import FrontLayout from "./layouts/frontend/FrontLayout";

//backend 
import Dashboard from "./components/admin/Dashboard";
import AddCategory from "./components/admin/Category/Add_Category";
import AllCategory from "./components/admin/Category/All_Category";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/allCategory" element={< AllCategory />} />
          <Route path="/admin/addCategory" element={< AddCategory />} />




          
          <Route path="/FrontLayout" element={< FrontLayout />} />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
