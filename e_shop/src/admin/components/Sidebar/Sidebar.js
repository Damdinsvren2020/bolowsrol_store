import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsTag, BsFillGridFill, BsBox, BsCardImage } from "react-icons/bs";

import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="Sidebar_Container">
      <nav className="Sidebar_Menu">
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <AiOutlineDashboard />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/dashboard"}>Хянах самбар</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsCardImage />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/slider"}>Slider</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsTag />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/brand"}>Брэнд</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsFillGridFill />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/category"}>Категори</Link>
            </span>
          </span>
        </div>
        <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsFillGridFill />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/subcategory"}>Дэд Категори</Link>
            </span>
          </span>
        </div>

        {/* <div className="Sidebar_MenuButton">
          <span className="Sidebar_MenuSpan">
            <div className="Siderbar_Menu_span_icon">
              <BsBox />
            </div>
            <span className="Sidebar_Menu_list">
              <Link to={"/admin/product"}>Бүтээгдхүүн</Link>
            </span>
          </span>
        </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
