import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import SliderTable from "../../Tables/Slider/SliderTable";
const Slider = () => {
  return (
    <div className="w-full">
      <div className="p-[10px] m-auto">
        <div className="flex">
          <div className="w-[300px] h-[full]">
            <Sidebar />
          </div>
          <div className="w-full ml-[5px] bg-[#FAF8F8]">
            <SliderTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
