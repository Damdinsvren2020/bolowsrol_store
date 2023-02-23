import React, { useState, useEffect } from "react";
import { url, CDNURL } from "../../../../utils/url";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(0);
  const history = useNavigate();
  const user_token = localStorage.getItem("user-token");
  useEffect(() => {
    if (user_token) {
      const authorize = async () => {
        try {
          const { data } = await axios.get(`${url}/v1/authorize`, {
            headers: {
              authorization: "Bearer " + user_token,
            },
          });
          if (data.success) {
            if (data.role === "user") {
              return history("/Profile");
            }
            if (data.role === "admin") {
              return window.location.replace(`${CDNURL}/admin/login`);
            }
          } else {
            history("/Login");
          }
        } catch (error) {
          console.log(error);
        }
      };
      authorize();
    } else {
      history("/Login");
    }
  }, [history, refresh]);
  const logins = async () => {
    try {
      let formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);
      const { data } = await axios.post(`${url}/v1/login`, formdata);
      if (!data.success) {
        Swal.fire({
          icon: "error",
          title: data.result,
        });
      }
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: data.user.email,
        });
        setRefresh((old) => old + 1);
        localStorage.setItem("user-token", data.token);
        if (data.role === "user") {
          return history("/Profile");
        }
        if (data.role === "admin") {
          return window.location.replace(`${CDNURL}/admin/login`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="LoginContainer">
      <div className="Login">
        <div className="LoginCardContainer">
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Таны email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Та Email хаягаа оруулна уу !!!"
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
                  onClick={() => logins()}
                >
                  Нэвтрэх
                </button>
                <p className="text-center text-gray-500 text-xs">
                  Эсвэл <Link to={"/signup"}>Бүртгүүлэх</Link>
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

export default Login;
