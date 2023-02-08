import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Category_Table from "../../Tables/Category/Category";

const Category = () => {
  return (
    <div className="w-full">
      <div className="p-[10px] m-auto">
        <div className="flex">
          <div className="w-[300px] h-[full]">
            <Sidebar />
          </div>
          <div className="w-full ml-[5px] bg-[#FAF8F8]">
            <Category_Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
