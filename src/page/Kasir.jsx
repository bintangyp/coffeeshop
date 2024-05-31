import React from "react";
import cappuccino from "../assets/product/cappuccino.webp";
import americano from "../assets/product/americano.webp";
import espresso from "../assets/product/espresso.webp";

const Kasir = () => {
  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <div className="flex gap-4">
          <div className="w-2/3">
            <Search />
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4  h-screen-min-200 overflow-y-scroll px-4 my-4">
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
              <CardProduct name="cappuccino" img={cappuccino} price="25000" />
            </div>
          </div>
          <div
            className="w-1/3 h-96 bg-mysecondary rounded-lg"
            id="keranjang"
          ></div>
        </div>
      </div>
    </div>
  );
};

const CardProduct = ({ name, price, img }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl transition-all hover:scale-105 cursor-pointer">
      <figure className="px-3 pt-3">
        <img src={img} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body p-3">
        <h2 className="font-bold capitalize pb-2 border-b border-myprimary">
          {name}
        </h2>
        <p className="text-myprimary font-bold text-sm">Rp. {price}</p>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="flex justify-end items-center ">
      <span className="font-bold pr-4 text-lg">Search</span>
      <label className="input input-bordered flex items-center gap-2 ">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};
export default Kasir;
