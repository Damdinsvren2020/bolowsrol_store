import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../../components/Views/Dashboard/Dashboard";
import Slider from "../../components/Views/Slider/Slider";
import Category from "../../components/Views/Category/Category";
import SubCategory from "../../components/Views/SubCategory/SubCategory";
import Brand from "../../components/Views/Brand/Brand";
import Product from "../../components/Views/Product/Product";

const Admin = () => {
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState("Нүүр хуудас");
  React.useEffect(() => {
    switch (window.location.pathname) {
      case "/admin/dashboard":
        setPageTitle("Нүүр хуудас");
        break;
    }
    switch (window.location.pathname) {
      case "/admin/slider":
        setPageTitle("Slider");
        break;
    }
    switch (window.location.pathname) {
      case "/admin/category":
        setPageTitle("Category");
        break;
    }
    switch (window.location.pathname) {
      case "/admin/brand":
        setPageTitle("Brand");
        break;
    }
    switch (window.location.pathname) {
      case "/admin/product":
        setPageTitle("Product");
        break;
    }
    switch (window.location.pathname) {
      case "/admin/subcategory":
        setPageTitle("SubCategory");
        break;
    }
  }, []);
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subcategory" element={<SubCategory />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Admin;
