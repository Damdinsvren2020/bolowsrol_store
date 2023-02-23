import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./front/pages/Home/Home";
import Admin from "./admin/pages/Admin/index";
import Login from "./front/pages/auth/Login/Login";
import SignUp from "./front/pages/auth/SignUp/SignUp";
import Detail from "./front/pages/detail/detail";
import Category from "./front/pages/category/category";
import Profile from "./front/pages/auth/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
