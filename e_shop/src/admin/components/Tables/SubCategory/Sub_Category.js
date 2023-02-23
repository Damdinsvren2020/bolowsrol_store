import React, { useState, useEffect } from "react";
import { Modal } from "@mantine/core";
import { AiFillDelete } from "react-icons/ai";
import { CDNURL, url } from "../../../../utils/url";
import Swal from "sweetalert2";
import axios from "axios";

const SubCategoryTable = () => {
  const [opened, setOpened] = useState(false);

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
                      Дэд Категори нэр
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Дэд Категори тайлбар
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
                  {/* {category.map((row) => ( */}
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {/* sdsdsd {row.name} */}
                      sadad
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ddssd {/* {row.description} */}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img
                        className="w-[100px] h-[80px]"
                        //   src={`${CDNURL}/${row.avatar}`}
                      />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <AiFillDelete className="text-red-500 text-lg" />
                    </td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Мэдээлэл нэмэх"
      >
        {/* Modal content */}
      </Modal>
    </div>
  );
};

export default SubCategoryTable;
