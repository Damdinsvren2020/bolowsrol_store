import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import SubCategoryTable from "../../Tables/SubCategory/Sub_Category";

const SubCategory = () => {
  return (
    <div className="w-full">
      <div className="p-[10px] m-auto">
        <div className="flex">
          <div className="w-[300px] h-[full]">
            <Sidebar />
          </div>
          <div className="w-full ml-[5px] bg-[#FAF8F8]">
            <SubCategoryTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
