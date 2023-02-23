import React from "react";
import {
  AiFillDashboard,
  AiFillHeart,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./front_sidebar.css";

const Front_Sidebar = () => {
  return (
    <div className="Profile_Sidebar_Container">
      <nav className="Profile_Sidebar_Menu">
        <div className="Profile_Sidebar_MenuButton">
          <span className="Profile_Sidebar_MenuSpan">
            <div className="Profile_Siderbar_Menu_span_icon">
              <AiFillDashboard />
            </div>
            <span className="Profile_Sidebar_Menu_list">
              <Link to={"/admin/dashboard"}>Миний самбар</Link>
            </span>
          </span>
        </div>
        <div className="Profile_Sidebar_MenuButton">
          <span className="Profile_Sidebar_MenuSpan">
            <div className="Profile_Siderbar_Menu_span_icon">
              <svg
                fill="none"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <g stroke="#202020" stroke-linecap="round" stroke-width="2">
                  <path d="M19.727 20.447c-.455-1.276-1.46-2.403-2.857-3.207C15.473 16.436 13.761 16 12 16s-3.473.436-4.87 1.24c-1.397.804-2.402 1.931-2.857 3.207"></path>
                  <circle cx="12" cy="8" fill="#fac203" r="4"></circle>
                </g>
              </svg>
            </div>
            <span className="Profile_Sidebar_Menu_list">
              <Link to={"/admin/dashboard"}>Хувийн мэдээлэл</Link>
            </span>
          </span>
        </div>
        <div className="Profile_Sidebar_MenuButton">
          <span className="Profile_Sidebar_MenuSpan">
            <div className="Profile_Siderbar_Menu_span_icon">
              <AiFillHeart />
            </div>
            <span className="Profile_Sidebar_Menu_list">
              <Link to={"/admin/dashboard"}>Хүслийн жагсаалт</Link>
            </span>
          </span>
        </div>

        <div className="Profile_Sidebar_MenuButton">
          <span className="Profile_Sidebar_MenuSpan">
            <div className="Profile_Siderbar_Menu_span_icon">
              <AiOutlineLogout />
            </div>
            <span className="Profile_Sidebar_Menu_list">
              <Link to={"/admin/dashboard"}>Системээс гарах</Link>
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Front_Sidebar;
