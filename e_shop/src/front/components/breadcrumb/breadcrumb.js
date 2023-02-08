import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import LogoSmall from "../../../assets/small_logo.png";

const BreadCrumb = () => {
  return (
    <div>
      <nav className="container">
        <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
          <li className="px-2">
            <a href="#" className="no-underline text-indigo">
              <div className="w-[41px] h-[41px] rounded-[8px] bg-[#3D5DA8] mt-[-8px]">
                <img
                  className="w-[41px] h-[41px] object-contain"
                  src={LogoSmall}
                  alt="/"
                />
              </div>
            </a>
          </li>
          <li>
            <AiOutlineArrowRight className="mt-[5px] text-[#3D5DA8]" />
          </li>
          <li className="px-2">
            <a href="#" className="no-underline text-indigo">
              Сурагчийн ширээ сандал
            </a>
          </li>
          <li>
            <AiOutlineArrowRight className="mt-[5px] text-[#3D5DA8]" />
          </li>
          <li className="px-2">Эвхэгддэг ор</li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
