import TablesData from "../components/TablesData";
import { faker } from "@faker-js/faker/locale/id_ID";
import updateIcon from "../assets/icons/update.svg";
import deleteIcon from "../assets/icons/delete.svg";
import addIcon from "../assets/icons/add.svg";
import printIcon from "../assets/icons/print.svg";
import { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";

const fieldName = [
  {
    name: "Kode Bahan",
    selector: (row) => row.kode,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Nama Bahan",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Stok",
    selector: (row) => row.stok,
    sortable: true,
  },
  {
    name: "Satuan",
    selector: (row) => row.satuan,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Harga Pokok / Satuan",
    selector: (row) => row.hpokok,
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
    name: "Aksi",
    selector: (row) => row.aksi,
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
        id="updateBtn"
        alt=""
        className="cursor-pointer h-full"
        onClick={async () => {
          await setSelectedId(id);
          await document.getElementById("modalUpdate").showModal();
        }}
      />
      <img
        src={deleteIcon}
        alt=""
        className="cursor-pointer h-full"
        onClick={async () => {
          await setSelectedId(id);
          await document.getElementById("modalDelete").showModal();
        }}
      />
    </div>
  );
};
const BahanPokok = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [fakeProduct, setFakeProduct] = useState(null);
  useEffect(() => {
    const data = Array.from({ length: 500 }, (_, index) => ({
      kode: `BP${faker.string.numeric(3)}`,
      name: faker.commerce.productMaterial(),
      stok: faker.string.numeric(1),
      satuan: "kg",
      hpokok: faker.commerce.price({ symbol: "Rp." }),
      aksi: <BtnMore id={index} setSelectedId={setSelectedId} />,
    }));
    setFakeProduct(data);
  }, []);

  return (
    <div className="p-4">
      {selectedId !== null && (
        <>
          <Modal
            data={fakeProduct}
            id={selectedId}
            setSelectedId={setSelectedId}
            modalId="modalUpdate"
          />
          <Modal
            data={fakeProduct}
            id={selectedId}
            setSelectedId={setSelectedId}
            modalId="modalDelete"
          />
        </>
      )}
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <BreadCrumbs link={["home", "master data", "bahan pokok"]} />

        <div className="flex gap-4 float-end my-4">
          <Modal
            data=""
            id=""
            setSelectedId={setSelectedId}
            modalId="modalAdd"
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
            Tambah Bahan
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

const Modal = ({ data, id, setSelectedId, modalId }) => {
  const product = data ? data[id] : "";

  return (
    <dialog id={modalId} className="modal">
      <div
        className={
          modalId !== "modalDelete"
            ? "modal-box w-11/12 lg:max-w-3xl "
            : "modal-box"
        }
      >
        <h3 className="font-bold text-xl">
          {modalId === "modalDelete" ? "Hapus " : "Edit"}
          <span className="text-mygreen">{product.name || ""}</span>
        </h3>
        {modalId === "modalDelete" ? (
          <div className="capitalize font-bold my-4">yakin hapus data !</div>
        ) : (
          <div className="mx-8">
            <InputText label="Kode Bahan" value={product.kode || ""} />
            <InputText label="Nama Barang" value={product.name || ""} />
            <InputText label="Stok" value={product.stok || ""} />
            <InputText label="Satuan" value={product.satuan || ""} />
            <InputText
              label="Harga Pokok / Satuan"
              value={product.hpokok || ""}
            />
          </div>
        )}
        <div className="modal-action">
          <form method="dialog" className="flex gap-4">
            <button className="btn bg-myprimary text-mysecondary hover:bg-[#b77d4a]">
              {modalId === "modalDelete" ? "Hapus" : "Simpan"}
            </button>
            <button
              className="btn btn-error text-white"
              onClick={() => {
                setSelectedId(null);
              }}
            >
              Batal
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

export default BahanPokok;
