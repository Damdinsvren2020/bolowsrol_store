import React from "react";
import Qpay from "../../../../assets/qpay.png";

const Single_Detail = () => {
  return (
    <div>
      <div>
        <h2>Хямдарсан үнэ</h2>
      </div>
      <div className="flex gap-[10px] w-full">
        <div>
          <h2 className="font-bold text-[32px]">155000 ₮</h2>
        </div>
        <div className="border-2 rounded-md border-[#FD5749] p-[5px]">
          <h2 className="text-[#FD5749] text-[20px]">- 30 %</h2>
        </div>
        <div className="mt-[10px]">
          <h2 className="text-[20px]">210000 ₮</h2>
        </div>
      </div>
      <div>
        <div className="flex">
          <p>Хэмнэлт:</p>{" "}
          <span className="text-[#FF0000] ml-[10px]">55000 ₮</span>
        </div>
        <div className="w-full h-[20px] mt-[10px]">
          <hr className="underline decoration-dashed text-[#3D5DA8]" />
        </div>
      </div>
      <div>
        <div className="flex space-x-2 w-full">
          <div className="w-2/4">
            <button
              type="button"
              className="inline-block h-[50px] px-6 py-2 border-2 border-[#3D5DA8] text-[#000000] font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-full"
            >
              Сагсанд нэмэх
            </button>
          </div>
          <div className="w-2/4">
            <button
              type="button"
              className="inline-block h-[50px] px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Худалдан авах
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[20px] mt-[10px]">
        <hr className="underline decoration-dashed text-[#3D5DA8]" />
      </div>
      <div className="w-full h-[300px]">
        <div className="w-full h-[100px]">
          <div className="w-full h-[80px] border-2 border-[#3D4DA8]">
            <div className="w-full flex gap-[20px]">
              <div className="w-[70px] h-[70px] ml-[10px]">
                <img
                  className="w-[70px] h-[70px] object-contain mt-[5px]"
                  src={Qpay}
                  alt="/"
                />
              </div>
              <div className="mt-[10px]">
                <h1>Шууд төлөлт</h1>
                <p>Qpay</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[150px]">
          <div className="w-full h-[80px] border-2 border-[#3D4DA8]">
            <div className="w-full flex gap-[20px]">
              <div className="w-[70px] h-[70px] ml-[10px]">
                <img
                  className="w-[70px] h-[70px] object-contain mt-[5px]"
                  src={Qpay}
                  alt="/"
                />
              </div>
              <div className="mt-[10px]">
                <h1>Шууд төлөлт</h1>
                <p>Qpay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single_Detail;
