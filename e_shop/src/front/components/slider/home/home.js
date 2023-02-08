import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CDNURL, url } from "../../../../utils/url";
import axios from "axios";
const HomeSlider = () => {
  const [slider, setSlider] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    const getSlider = async () => {
      const { data } = await axios.get(`${url}/banner`);
      setSlider(data.data);
      console.log(data.data);
    };
    getSlider();
  }, [refreshKey]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div>
      <Slider {...settings}>
        {slider.map(
          (row) =>
            row.orders === 1 && (
              <div className="w-full h-[500px] p-[40px]">
                <img
                  className="w-full h-[500px] object-contain"
                  src={`${CDNURL}/${row.avatar}`}
                  alt="/"
                />
              </div>
            )
        )}
      </Slider>
    </div>
  );
};

export default HomeSlider;
