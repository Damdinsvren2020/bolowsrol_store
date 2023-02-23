import React from "react";
import Product from "./belen.module.css";
import Banner_image from "../../../../assets/test.png";
import Slider from "react-slick";
const Belen_hudaldaalj_bui = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <div className={Product.belencontainer}>
        <div className={Product.belencards}>
          <div className={Product.belencard}>
            <img src={Banner_image} alt="/" />
          </div>
          <div className={Product.belencard}>
            <img src={Banner_image} alt="/" />
          </div>
          <div className={Product.belencard}>
            <img src={Banner_image} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belen_hudaldaalj_bui;
