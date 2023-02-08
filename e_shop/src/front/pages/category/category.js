import React from "react";
import Header from "../../components/header/header";
import Category_Filter from "../../components/filter/category/category";
import { Select } from "@mantine/core";
import Categorycss from "./category.module.css";

const Category = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen	min-w-full bg-[#F8F8F8]">
        <div className="max-w-screen-xl m-auto">
          <div className="w-full">
            <div className="p-[10px] m-auto">
              <div className="flex gap-[20px]">
                <div className="w-[500px] h-screen bg-[#FFFFFF]">
                  <Category_Filter />
                </div>
                <div className="w-full  h-screen ml-[5px]">
                  <div className="w-full h-[50px] bg-[#FFFFFF]">
                    <div className="w-full h-[50px] ">
                      <div className="p-[10px] flex justify-between">
                        <div className="g-[20px] flex">
                          <h2 className="text-[20px]">Буйдан</h2>
                          <span className="text-[#BDBDBD] ml-[10px]">
                            | 83 бүтээгдхүүн
                          </span>
                        </div>
                        <div className="w-[200px]">
                          <Select
                            placeholder="Pick one"
                            data={[
                              { value: "react", label: "React" },
                              { value: "ng", label: "Angular" },
                              { value: "svelte", label: "Svelte" },
                              { value: "vue", label: "Vue" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-[10px]">
                    <div className={Categorycss.CardContainer}>
                      <div className={Categorycss.Card}>
                        <div className={Categorycss.CardImg}>
                          <img
                            className="w-[200px] h-[250px] object-cover"
                            src="https://cdnp.cody.mn/spree/images/1349638/product/9to5_3460-W2-BF.jpg"
                            alt="/"
                          />
                        </div>
                        <div className={Categorycss.CardText}>
                          <h1>Ажилтны сандал</h1>
                          <h5>Оффис сандал</h5>
                          <p>1,578,500 ₮</p>
                        </div>
                      </div>
                    </div>
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

export default Category;
