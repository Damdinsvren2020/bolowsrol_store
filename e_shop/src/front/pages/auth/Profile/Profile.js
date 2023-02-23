import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profiles from "../../../components/profiles/profile/profile";
import Front_Sidebar from "../../../components/sidebar/front_sidebar";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="p-[10px] m-auto bg-[#FAF8F8]">
        <div className="flex">
          <div className="w-[300px] h-[full]">
            <Front_Sidebar />
          </div>
          <div className="w-full ml-[5px] bg-[#FAF8F8]">
            <Profiles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
