import React from "react";
import Slider from "react-slick";
import "./style.css";

const Suragchiin_hereglegdhvvn = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="p-[15px]">
        <h2 className="text-center text-[#000000] text-[26px]">
          Сурагчийн хэрэглэгдэхүүн
        </h2>
      </div>
      <div className="Suragch">
        <div className="Suragch_card">
          <div className="Suragch_card_img">
            <img
              src="https://cdnp.cody.mn/spree/images/1415368/product/D57918905657.jpg"
              alt="/"
            />
          </div>
          <div className="Suragch_card_new ">
            <div className="p-[5px]">
              <h2 className="text-center">шинэ</h2>
            </div>
          </div>
          <div className="w-full h-[90px] bg-[#F5F5F5]">
            <h2 className="fonts">Нэг давхар эвхэгддэг ор</h2>
            <div className="flex justify-center gap-[10px]">
              <p className="fonts text-[#FD5749]">125000 ₮</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suragchiin_hereglegdhvvn;
