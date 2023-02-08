import React, { useState, useEffect } from "react";
import { Modal } from "@mantine/core";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { CDNURL, url } from "../../../../utils/url";
import Swal from "sweetalert2";

const Brand_table = () => {
  const [opened, setOpened] = useState(false);
  const [brand, setBrand] = useState([]);
  const [brand_name, setBrand_name] = useState("");
  const [image, setImage] = useState(false);
  const [newImage, setNewImage] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    const getBrand = async () => {
      const { data } = await axios.get(`${url}/brand`);
      setBrand(data.data);
      console.log(data.data);
    };
    getBrand();
  }, [refreshKey]);
  async function createBrand(event) {
    event.preventDefault();
    let formdata = new FormData();
    formdata.append("brand_name", brand_name);
    formdata.append("avatar", image[0]);
    const { data } = await axios.post(`${url}/brand_create`, formdata);
    if (data.success) {
      console.log("Амжилттай нэмэгдлээ");
      setRefreshKey((old) => old + 1);
      setBrand_name("");
      setImage(null);
      setOpened(false);
      Swal.fire({
        title: "Амжилттай нэмэгдлээ",
        icon: "success",
      });
      if (!data.success) {
        Swal.fire({
          title: "Амжилтгүй",
          icon: "error",
          text: data.result && data.result,
        });
      }
    }
  }
  const deleteBrand = async (itemId) => {
    const { data } = await axios.delete(`${url}/brand_delete/${itemId}`);
    if (data.success) {
      setRefreshKey((old) => old + 1);
      Swal.fire({
        title: "Амжилттай устгалаа",
        icon: "success",
      });
      if (!data.success) {
        Swal.fire({
          title: "Амжилтгүй",
          icon: "error",
        });
      }
    }
  };
  return (
    <div>
      <div>
        <div className="flex space-x-2 justify-end p-[20px]">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setOpened(true)}
          >
            Нэмэх
          </button>
        </div>
      </div>
      <div className="flex flex-col p-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Брэнд нэр
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Зураг
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Үйлдэл
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {brand.map((row) => (
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.brand_name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img
                          className="w-[100px] h-[80px]"
                          src={`${CDNURL}/${row.avatar}`}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <AiFillDelete
                          className="text-red-500 text-lg"
                          onClick={() => deleteBrand(row._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal opened={opened} title="Мэдээлэл нэмэх">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleText0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Брэнд нэр
            </label>
            <input
              type="text"
              value={brand_name}
              onChange={(e) => setBrand_name(e.target.value)}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              placeholder="Брэнд нэр оруулна уу !"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleText0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Зураг
            </label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target?.files) {
                  setImage(e.target.files);
                  setNewImage(true);
                } else {
                  setImage(null);
                  setNewImage(false);
                }
              }}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            />
          </div>
        </div>
        <div className="flex space-x-2 justify-end">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={createBrand}
          >
            Нэмэх
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Brand_table;
