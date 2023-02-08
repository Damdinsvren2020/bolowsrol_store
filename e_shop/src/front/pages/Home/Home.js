import React from "react";
import Header from "../../components/header/header";
import HomeSlider from "../../components/slider/home/home";
import Ontsloh_Product from "../../components/product/ontsloh_product/ontsloh_product";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeSlider />
      </div>
      <div className="mt-[10px]">
        <Ontsloh_Product />
      </div>
    </div>
  );
};

export default Home;
