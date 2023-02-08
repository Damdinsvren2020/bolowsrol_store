import React from "react";
import City from "../../../../assets/city_1.png";
import Slider from "react-slick";

const Product_detail = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <a>
            <img src="https://images.unsplash.com/photo-1614312385003-dcea7b8b6ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2826&q=80" />
          </a>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="ml-[30px]">
      <div className="gap-[10px] flex">
        <div className="w-[50px] h-[50px]">
          <img
            className="w-[50px] h-[50px] object-cover"
            src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202208021258"
            alt="/"
          />
        </div>
        <div className="mt-[10px]">
          <h2 className="font-bold text-[18px]">Нэг давхар эвхэгддэг ор</h2>
        </div>
      </div>
      <div className="mt-[10px]">
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1614312385003-dcea7b8b6ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2826&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1614312385003-dcea7b8b6ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2826&q=80" />
          </div>
        </Slider>
      </div>
      <div className="w-full h-[20px] mt-[20px]">
        <hr className="underline border-dashed text-[#3D5DA8]" />
      </div>
      <div className="max-w-screen-xl m-auto mt-[20px] w-full ">
        <div className="w-full h-[120px] flex gap-[10px] justify-between">
          <div className="w-[150px] h-[100px]  p-[10px] border-2 border-[#D9D9D9] rounded-xl">
            <div>
              <h2 className="text-[20px] text-[#6D7175]">Барааны код</h2>
              <p className="text-[20px]">0R89</p>
            </div>
          </div>
          <div className="w-[200px] h-[100px]  p-[10px] border-2 border-[#D9D9D9] rounded-xl">
            <div>
              <h2 className="text-[20px] text-[#6D7175]">Материал</h2>
              <p className="text-[20px]">Төмөр</p>
            </div>
          </div>
          <div className="w-[200px] h-[100px]  p-[10px] border-2 border-[#D9D9D9] rounded-xl">
            <div>
              <h2 className="text-[20px] text-[#6D7175]">Насны ангилал</h2>
              <p className="text-[20px]">Kids</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto w-full h-[120px]">
        <div className="w-full h-[100px] p-[10px] border-2 border-[#D9D9D9] flex gap-[10px] rounded-xl">
          <div className="w-[80px] h-[80px] border-2 bg-[#3D5DA8] rounded-full justify-center flex">
            <img
              className="w-[50px] h-[50px] object-contain mt-[6px]"
              src={City}
              alt="/"
            />
          </div>
          <div>
            <h2 className="text-[20px] text-[#f0000]">Хот дотор хүргэлттэй</h2>
            <p className="text-[20px] text-[#6D7175]">Угсралттай , Нөат-тэй </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto w-full h-[20px]">
        <hr className="underline decoration-dashed text-[#3D5DA8]" />
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="mt-[20px]">
          <h2 className="text-[20px] text-[#242424]">
            Барааны дэлгэрэнгүй мэдээлэл
          </h2>
        </div>
        <div className="mt-[20px] flex gap-[10px]">
          <div className="w-[300px] h-[200px]">
            <div>
              <h2 className="text-[16px] text-[#242424]">Үзүүлэлтүүд</h2>
            </div>
            <div className="mt-[20px]">
              <h2 className="text-[16px] text-[#242424]-600">Хүйс</h2>
              <h2 className="text-[16px] text-[#242424]-600">Материал</h2>
              <h2 className="text-[16px] text-[#242424]-600">Насны ангилал</h2>
              <h2 className="text-[16px] text-[#242424]-600">Ерөнхий өнгө</h2>
              <h2 className="text-[16px] text-[#242424]-600">Тоо ширхэг</h2>
              <h2 className="text-[16px] text-[#242424]-600">Төрөл</h2>
            </div>
          </div>
          <div className="w-[300px] h-[200px]">
            <div className="mt-[20px]">
              <h2 className="text-[16px] text-[#000000]-600">Эр/эм </h2>
              <h2 className="text-[16px] text-[#000000]-600">Төмөр </h2>
              <h2 className="text-[16px] text-[#000000]-600">Хүүхэд</h2>
              <h2 className="text-[16px] text-[#000000]-600">Алаг</h2>
              <h2 className="text-[16px] text-[#000000]-600">3pcs</h2>
              <h2 className="text-[16px] text-[#000000]-600">ОР</h2>
              <h2 className="text-[16px] text-[#000000]-600">Төрөл</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_detail;
