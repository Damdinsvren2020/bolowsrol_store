import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HomeSlider from "../../components/slider/home/home";
import Ontsloh_Product from "../../components/product/ontsloh_product/ontsloh_product";
import Belen_hudaldaalj_bui from "../../components/product/belen_hudaldaalj_bui/belen_hudaldaalj_bui";
import Suragchiin_hereglegdhvvn from "../../components/product/Suragchiin_hereglegdhvvn";
import Huwtsasnii_zagwar from "../../components/product/huwtsasnii_zagwar/huwtsasnii_zagwar";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeSlider />
      </div>
      <div className="mt-[40px]">
        <Ontsloh_Product />
      </div>
      <div className="mt-[40px]">
        <Belen_hudaldaalj_bui />
      </div>
      {/* <div className="mt-[40px]">
        <Suragchiin_hereglegdhvvn />
      </div> */}
      <div className="mt-[40px]">
        <Huwtsasnii_zagwar />
      </div>
      <div className="mt-[80px]">
        <Huwtsasnii_zagwar />
      </div>
      <div className="mt-[80px]">
        <Huwtsasnii_zagwar />
      </div>
      {/* <div className="mt-[40px]">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
