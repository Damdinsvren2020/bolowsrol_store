import React, { useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../../../../utils/url";
import axios from "axios";
import Swal from "sweetalert2";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [visible, setVisible] = useState(false);

  const registerUser = async (e) => {
    setConfirmLoading(true);
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("username", name);
      formData.append("email", email);
      formData.append("password", password);
      const { data } = await axios.post(`${url}/v1/register`, formData);
      if (data.success) {
        setVisible(false);
        setConfirmLoading(false);
        setRefreshKey((old) => old + 1);
        Swal.fire({
          title: "Амжилттай бүртгэлээ",
          icon: "success",
          title: data.result,
        });
      }
      if (!data.success) {
        setConfirmLoading(false);
        new Swal({
          icon: "error",
          title: data.result,
        });
      }
    } catch (error) {
      setConfirmLoading(false);
      new Swal({
        icon: "error",
        title: "Хэрэглэгч бүртгэхэд алдаа гарлаа",
      });
    }
  };
  return (
    <div className="SignUpContainer">
      <div className="Singup">
        <div className="SignupCardContainer">
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Таны нэр
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Та нэр ээ оруулна уу !!!"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Таны email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder=" Та email ээ оруулна уу !!!"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Нууц үг
                </label>
                <input
                  className="shadow appearance-none border border--500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={(e) => registerUser(e)}
                >
                  Бүртгүүлэх
                </button>
                <p className="text-center text-gray-500 text-xs">
                  Эсвэл <Link to={"/login"}>Нэвтрэх</Link>
                </p>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2023 BolovsrolStore.mn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
