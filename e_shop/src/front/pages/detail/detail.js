import React from "react";
import Header from "../../components/header/header";
import BreadCrumb from "../../components/breadcrumb/breadcrumb";
import Product_detail from "../../components/product/detail/product_detail";
import Single_Detail from "../../components/product/single_detail/single_detail";

const Detail = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="max-w-screen-xl m-auto">
        <BreadCrumb />
      </div>
      <div className="max-w-screen-xl m-auto ">
        <div className="flex gap-[40px]">
          <div className="w-[600px]">
            <Product_detail />
          </div>
          <div className="w-[600px]">
            <div>
              <Single_Detail />
            </div>
          </div>
        </div>
        <div className="w-full h-[20px] mt-[20px] p-[10px]">
          <div>
            <hr className="underline decoration-dashed text-[#3D5DA8]" />
          </div>
          <div className="p-[20px]">
            <h2 className="text-[18px] text-[#f0000] font-bold">
              Нэмэлт мэдээлэл
            </h2>
            <p className="text-[16px] text-[#f0000]">
              Monsters P9261 3ш ХүүхдийFRA
            </p>
          </div>
          <div>
            <hr className="underline decoration-dashed text-[#3D5DA8]" />
          </div>
        </div>
      </div>
      <div className="w-full h-[200px]"></div>
    </div>
  );
};

export default Detail;
