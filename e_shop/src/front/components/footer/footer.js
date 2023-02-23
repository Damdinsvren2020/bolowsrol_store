import React from "react";
import Logo from "../../../assets/logo 1.png";
import Footerimage from "../../../assets/Footer.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footerbackground">
        <img src={Footerimage} alt="/" />
      </div>
      <div className="h-[200px]">
        <div className="relative">
          <div className="relative">
            <div className="absolute">
              <div className="pl-[30px] mt-[150px]">
                <div className="mt-[10px]">
                  <div className="w-[270px] h-[100px]">
                    <img src={Logo} className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
