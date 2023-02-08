import React from "react";

const Category_Filter = () => {
  return (
    <div className="p-[10px]">
      <div>
        <div className="flex">
          <h2 className="font-bold">Category</h2>
        </div>
        <div className="w-full">
          <div className="mt-[10px] h-[200px]">
            <label>Select an option</label>
            <select
              multiple
              id="countries_multiple"
              className="mt-[10px] h-[200px] text-sm rounded-lg focus:ring-[#FD5749]-500 focus:border-[#FD5749]-500 block w-full  dark:bg-[#FD5749]-700 "
            >
              <option className="p-[10px] ">Choose countries</option>
              <option className="p-[10px]">United States</option>
              <option className="p-[10px]">Canada</option>
              <option className="p-[10px]">France</option>
              <option className="p-[10px]">Germany</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-[20px] h-[200px]">
            <label>Төлөв</label>
            <select
              multiple
              className="mt-[10px] h-[200px] text-[#FD5749]-900 text-sm rounded-lg focus:ring-[#FD5749]-500 focus:border-[#FD5749]-500 block w-full  dark:bg-[#FD5749]-700 "
            >
              <option className="p-[10px]">Choose countries</option>
              <option className="p-[10px]">United States</option>
              <option className="p-[10px]">Canada</option>
              <option className="p-[10px]">France</option>
              <option className="p-[10px]">Germany</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-[10px] h-[200px]">
            <label>Материал</label>
            <select
              multiple
              id="countries_multiple"
              className="mt-[10px] h-[200px] text-[#FD5749]-900 text-sm rounded-lg focus:ring-[#FD5749]-500 focus:border-[#FD5749]-500 block w-full  dark:bg-[#FD5749]-700 "
            >
              <option className="p-[10px]">Choose countries</option>
              <option className="p-[10px]">United States</option>
              <option className="p-[10px]">Canada</option>
              <option className="p-[10px]">France</option>
              <option className="p-[10px]">Germany</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-[10px] h-[50px]">
            <label
              for="minmax-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Min-max range
            </label>
            <input
              id="minmax-range"
              type="range"
              min="0"
              max="10"
              value="5"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-[#FF6166]-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category_Filter;
