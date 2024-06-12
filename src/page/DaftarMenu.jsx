import TablesData from "../components/TablesData";
import { faker } from "@faker-js/faker/locale/id_ID";
import updateIcon from "../assets/icons/update.svg";
import deleteIcon from "../assets/icons/delete.svg";
import addIcon from "../assets/icons/add.svg";
import printIcon from "../assets/icons/print.svg";
import { useEffect, useState } from "react";

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
const BtnMore = ({ id, setSelectedId }) => {
  return (
    <div className="h-6 flex gap-2">
      <img
        src={updateIcon}
        alt=""
        className="cursor-pointer h-full"
        onClick={async () => {
          await setSelectedId(id);
          await document.getElementById("my_modal_1").showModal();
        }}
      />
      <img src={deleteIcon} alt="" className="cursor-pointer h-full" />
    </div>
  );
};
const DaftarMenu = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [fakeProduct, setFakeProduct] = useState(null);
  useEffect(() => {
    const data = Array.from({ length: 500 }, (_, index) => ({
      kode: `PS${faker.string.numeric(3)}`,
      name: faker.commerce.productName(),
      hpp: faker.commerce.price({ symbol: "Rp." }),
      hargaJual: faker.commerce.price({ symbol: "Rp." }),
      gambar: faker.image.urlLoremFlickr({ category: "food" }),
      detail: <BtnMore id={index} setSelectedId={setSelectedId} />,
    }));
    setFakeProduct(data);
  }, []);

  return (
    <div className="p-4">
      {selectedId !== null && (
        <Modal
          data={fakeProduct}
          id={selectedId}
          setSelectedId={setSelectedId}
          modalId="my_modal_1"
          open={true}
        />
      )}
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <div className="uppercase font-bold">daftar menu</div>
        <div className="flex gap-4 float-end my-4">
          <Modal
            data=""
            id=""
            setSelectedId=""
            modalId="modalAdd"
            open={false}
          />
          <button className="btn h-10 bg-myaccent text-myprimary border-myprimary hover:text-myaccent hover:bg-mygreen hover:border-myaccent group">
            <img
              src={printIcon}
              className="h-3/5 group-hover:brightness-0 group-hover:invert"
              alt=""
            />
            Cetak
          </button>
          <button
            className="btn h-10 bg-myprimary text-white hover:bg-myaccent hover:text-myprimary group"
            onClick={() => document.getElementById("modalAdd").showModal()}
          >
            <img
              src={addIcon}
              className="h-3/5 invert brightness-0 group-hover:invert-0 group-hover:brightness-100"
              alt=""
            />
            Tambah Menu
          </button>
        </div>
        <div className="">
          {fakeProduct !== null ? (
            <TablesData data={fakeProduct} fieldName={fieldName} />
          ) : (
            <div className="text-center my-4">
              <div className="text-myprimary">Sedang Meminta Data ...</div>
              <progress className="progress w-56"></progress>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Modal = ({ data, id, setSelectedId, modalId, open }) => {
  const product = data ? data[id] : "";

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box w-11/12 lg:max-w-3xl ">
        <h3 className="font-bold text-lg">
          Edit <span className="text-mygreen">{product.name || ""}</span>
        </h3>
        <div className="mx-8">
          <InputText label="Nama Barang" value={product.name || ""} />
          <InputText label="Gambar" value={product.gambar || ""} />
          <InputText label="Harga Jual" value={product.hargaJual || ""} />
          <InputText label="HPP" value={product.hpp || ""} />
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex gap-4">
            <button className="btn bg-myprimary text-mysecondary">Save</button>
            <button
              className="btn"
              onClick={() => {
                setSelectedId(null);
              }}
            >
              Close
            </button>
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
