import React,{useState,useEffect} from "react";
import Sidebar from "../../Sidebar/Sidebar";
import ProductTables from "../../Tables/Product/Product";

const Product = () => {
  const [opened,setOpened] = useState(false);

  return (
    <div className="w-full">
      <div className="p-[10px] m-auto">
        <div className="flex">
          <div className="w-[300px] h-[full]">
            <Sidebar />
          </div>
          <div className="w-full ml-[5px] bg-[#FAF8F8]">
            <ProductTables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
