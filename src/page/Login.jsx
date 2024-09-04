import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    message: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);

    await axios
      .post("http://localhost:3000/login", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        login();
        navigate("/");
      })
      .catch((err) => {
        const error = err.response.data.error;
        if (error === "NOTFOUND") {
          setAlert({ ["show"]: true, ["message"]: "User tidak ditemukan" });
        }
        if (error === "WRONG_PASSWORD") {
          setAlert({ ["show"]: true, ["message"]: "Password anda salah!" });
        }
      });
  };
  return (
    <div className="bg-gradient-to-t from-myprimary to-mygreen h-screen flex justify-center items-center">
      <div className=" bg-mysecondary/40 backdrop-blur-sm rounded-2xl shadow-md indicator flex justify-center items-center flex-col px-20 py-16">
        <span className="bg-transparent border-transparent indicator-item indicator-center badge badge-secondary h-[100px] w-[100px]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            alt=""
          />
        </span>
        <div className="capitalize text-mysecondary font-bold text-lg mb-6">
          login Now
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              name="username"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </label>
          {alert.show === true ? (
            <span className="italic text-red-600">{alert.message}</span>
          ) : (
            ""
          )}

          <button
            className="btn bg-mygreen border-0 text-mysecondary hover:bg-mysecondary hover:text-mygreen"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
