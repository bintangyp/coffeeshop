import TablesData from "../components/TablesData";
import { faker } from "@faker-js/faker/locale/id_ID";
import updateIcon from "../assets/icons/update.svg";
import deleteIcon from "../assets/icons/delete.svg";
import { useEffect, useRef, useState } from "react";

const fieldName = [
  {
    name: "Kode",
    selector: (row) => row.kode,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Nama Barang",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "HPP",
    selector: (row) => row.hpp,
    sortable: true,
    style: {
      borderRadius: "20px",
      backgroundColor: "#5686E1",
      margin: "10px",
      color: "white",
      justifyContent: "center",
    },
  },
  {
    name: "Harga Jual",
    selector: (row) => row.hargaJual,
    sortable: true,
    style: {
      borderRadius: "20px",
      backgroundColor: "#5686E1",
      margin: "10px",
      color: "white",
      justifyContent: "center",
    },
  },
  {
    name: "Gambar",
    cell: (row) => <img className="h-full" alt={row.name} src={row.gambar} />,
    sortable: true,
    style: {
      justifyContent: "center",
      height: "40px",
      alignItems: "center",
    },
  },
  {
    name: "Detail",
    selector: (row) => row.detail,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
];
const BtnMore = ({ productId, product, modalRef, setIsRendered }) => {
  return (
    <div className="h-6 flex gap-2">
      <img
        src={updateIcon}
        alt=""
        className="cursor-pointer h-full"
        onClick={() => {
          ReactDOM.render(
            <Modal data={product} id={productId} />,
            modalRef.current
          );
          setIsRendered(true);
          document.getElementById("my_modal_1").showModal();
          // setProductId(productId);
        }}
      />
      <img src={deleteIcon} alt="" className="cursor-pointer h-full" />
    </div>
  );
};
const DaftarMenu = () => {
  const [productId, setProductId] = useState(9);
  const [product, setProduct] = useState({});
  const [isRendered, setIsRendered] = useState(false);
  const modalRef = useRef(null);
  const fakeProduct = Array.from({ length: 10 }, (_, index) => ({
    kode: `PS${faker.string.numeric(3)}`,
    name: faker.commerce.productName(),
    hpp: faker.commerce.price({ symbol: "Rp." }),
    hargaJual: faker.commerce.price({ symbol: "Rp." }),
    gambar: faker.image.urlLoremFlickr({ category: "food" }),
    detail: (
      <BtnMore
        productId={index}
        data={product}
        modalRef={modalRef}
        setIsRendered={setIsRendered}
      />
    ),
  }));
  useEffect(() => {
    console.log(productId);
    setProduct(fakeProduct);
  }, [productId]);

  return (
    <div className="p-4">
      <div ref={modalRef}></div>
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <div className="uppercase font-bold">daftar menu</div>
        <div className="">
          <TablesData data={fakeProduct} fieldName={fieldName} />
        </div>
      </div>
    </div>
  );
};

const Modal = ({ data, id }) => {
  const product = data[id];
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box w-11/12 lg:max-w-3xl ">
        <h3 className="font-bold text-lg">
          Edit <span className="text-mygreen">{product.name}</span>
        </h3>
        <div className="mx-8">
          <InputText label="Nama Barang" value={product.name} />
          <InputText label="Gambar" value={product.gambar} />
          <InputText label="Harga Jual" value={product.hargaJual} />
          <InputText label="HPP" value={product.hpp} />
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex gap-4">
            <button className="btn bg-myprimary text-mysecondary">Save</button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

const InputText = ({ label, value }) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        defaultValue={value}
        placeholder="Type here"
        className="input input-bordered w-full "
      />
    </label>
  );
};

export default DaftarMenu;
