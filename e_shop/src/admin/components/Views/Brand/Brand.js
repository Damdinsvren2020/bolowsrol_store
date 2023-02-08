import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Brand_table from "../../Tables/Brand/Brand_Table";

const Brand = () => {
  return (
    <div className="full">
      <div className="p-[10px] m-auto">
        <div className="flex">
          <div className="w-[300px] h-[full]">
            <Sidebar />
          </div>
          <div className="w-full ml-[5px] bg-[#FAF8F8]">
            <Brand_table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
