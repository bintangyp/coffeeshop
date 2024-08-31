import React from "react";
import kasir from "../assets/icons/kasir.svg";
import { redirect } from "react-router-dom";

const Login = () => {
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
        <div className="flex flex-col gap-4">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
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
            <input type="password" className="grow" placeholder="Password" />
          </label>

          <div role="alert" className="alert alert-error rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed successfully.</span>
          </div>

          <button
            className="btn bg-mygreen border-0 text-mysecondary hover:bg-mysecondary hover:text-mygreen"
            onClick={() => {
              redirect("/");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
