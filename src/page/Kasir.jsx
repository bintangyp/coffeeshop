import { useState } from "react";
import cappuccino from "../assets/product/cappuccino.webp";
import espresso from "../assets/product/espresso.webp";
import cart from "../assets/icons/cart.svg";
import minus from "../assets/icons/minus.svg";
import CurrencyFormat from "react-currency-format";

const listProduct = [
  { name: "cappuccino", img: cappuccino, price: 20000, jumlah: 0 },
  { name: "americano", img: cappuccino, price: 30000, jumlah: 0 },
  { name: "espresso", img: espresso, price: 24000, jumlah: 0 },
  { name: "cappuc", img: cappuccino, price: 12000, jumlah: 0 },
  { name: "cino", img: cappuccino, price: 22000, jumlah: 0 },
];

const Kasir = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addToChart = (data) => {
    if (cartItem.find((product) => product.name == data.name)) {
      console.log("produk sudah dipilih");
      const existingProduct = cartItem.findIndex(
        (product) => product.name == data.name
      );
      const updateCartItem = [...cartItem];
      updateCartItem[existingProduct].jumlah += 1;
      setCartItem(updateCartItem);
      setTotalPrice(totalPrice + updateCartItem[existingProduct].price);
    } else {
      console.log("produk belum dipilih dan sudah ditambahkan");
      data.jumlah += 1;
      setCartItem([...cartItem, data]);
      setTotalPrice(totalPrice + data.price);
    }
  };
  const deleteFromCart = (data) => {
    if (cartItem.find((product) => product.name == data.name)) {
      console.log("produk sudah dipilih");
      const existingProduct = cartItem.findIndex(
        (product) => product.name == data.name
      );
      const updateCartItem = [...cartItem];
      updateCartItem[existingProduct].jumlah -= 1;

      if (updateCartItem[existingProduct].jumlah === 0) {
        updateCartItem.splice(existingProduct, 1);
        setTotalPrice(totalPrice - data.price);
      } else {
        setTotalPrice(totalPrice - updateCartItem[existingProduct].price);
      }
      setCartItem(updateCartItem);
    } else {
      console.log("produk belum dipilih dan sudah ditambahkan");
      setCartItem([...cartItem, data]);
    }
  };

  // console.log(cartItem);
  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <div className="flex gap-4">
          <div className="w-2/3">
            <Search />
            <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4  max-h-screen-min-220 overflow-y-scroll p-4 my-4">
              {listProduct.map((data, index) => (
                <CardProduct key={index} data={data} addToChart={addToChart} />
              ))}
            </div>
          </div>
          <div className="w-1/3 bg-mysecondary rounded-lg flex flex-col  ">
            <div className="flex m-4 ">
              <img src={cart} className="w-10 mr-2" alt="" />
              <div className="capitalize text-myprimary text-xl/loose font-bold">
                keranjang
              </div>
            </div>
            <div className="px-4 h-screen-min-350 lg:h-screen-min-300  overflow-y-scroll">
              {cartItem.map((data, index) => (
                <ProductCart
                  data={data}
                  key={index}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </div>
            <div className="mx-8 my-4 flex gap-2 xl:gap-3 flex-col lg:flex-row lg:items-center ">
              <div className="lg:w-4/6 flex gap-2 xl:gap-3 items-center">
                <div className="capitalize text-lg xl:text-2xl font-bold">
                  total
                </div>
                <div className="bg-myaccent w-full p-2 rounded-lg text-lg font-bold">
                  <CurrencyFormat
                    value={totalPrice}
                    prefix="Rp."
                    displayType="text"
                    thousandSeparator
                  />
                </div>
              </div>
              <div className="lg:w-2/6 w-full">
                <button className="btn hover:bg-myprimary btn-xs sm:btn-sm md:btn-md w-full">
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCart = ({ data, deleteFromCart }) => {
  const { name, img, price, jumlah } = data;
  return (
    <div className=" bg-myaccent rounded-lg p-2 gap-2 flex my-2 items-center">
      <div className="h-16 ">
        <img className="h-full rounded-lg" src={img} alt="" />
      </div>
      <div className="w-3/5">
        <p className="font-bold capitalize">{name}</p>
        <p className="text-slate-400 text-sm">Total Amount x{jumlah}</p>
        <p className="text-myprimary font-bold text-sm">
          <CurrencyFormat
            value={price * jumlah}
            displayType="text"
            thousandSeparator
            prefix="Rp."
          />
        </p>
      </div>
      <div
        className="flex float-right cursor-pointer"
        onClick={() => deleteFromCart(data)}
      >
        <img src={minus} className="w-8" alt="" />
      </div>
    </div>
  );
};
const CardProduct = ({ data, addToChart }) => {
  const { name, price, img } = data;
  return (
    <div
      className="card w-full h-max bg-base-100 shadow-xl transition-all hover:scale-105 cursor-pointer"
      onClick={() => addToChart(data)}
    >
      <figure className="px-3 pt-3">
        <img src={img} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body p-3">
        <h2 className="font-bold capitalize pb-2 border-b border-myprimary">
          {name}
        </h2>
        <p className="text-myprimary font-bold text-sm">
          <CurrencyFormat
            value={price}
            thousandSeparator
            displayType="text"
            prefix="Rp."
          />
        </p>
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
