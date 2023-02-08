import React from "react";
import Header_image from "../../../assets/Header.png";
import Logo from "../../../assets/logo 1.png";
import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="">
        <div className="h-[200px]">
          <div className="relative">
            <div className="relative">
              <div className="absolute">
                <div className="w-[750px] absolute top-[50px] h-[1px] bg-[#8D5AAD]"></div>
                <div className="pl-[30px]">
                  <div className="w-full">
                    <div className="py-[1.2rem]">
                      <h1 className="text-[12px] fonts font-[600] text-[#fff]">
                        Боловсрол сторе д тавтай морил
                      </h1>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    <div className="w-[170px] h-[40px]">
                      <img src={Logo} className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="left-[0%] w-[55%] h-[180px]">
                  <img src={Header_image} className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="header-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
