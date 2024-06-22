import TablesData from "../components/TablesData";
import { faker } from "@faker-js/faker/locale/id_ID";
import updateIcon from "../assets/icons/update.svg";
import deleteIcon from "../assets/icons/delete.svg";
import addIcon from "../assets/icons/add.svg";
import printIcon from "../assets/icons/print.svg";
import { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import InputText from "../components/form/InputText";

const fieldName = [
  {
    name: "No Faktur",
    selector: (row) => row.faktur,
    sortable: true,
  },
  {
    name: "Nama Suplayer",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Jatuh Tempo",
    selector: (row) => row.tempo,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Aksi",
    selector: (row) => row.aksi,
    sortable: true,
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
const Piutang = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [fakeProduct, setFakeProduct] = useState(null);
  useEffect(() => {
    const data = Array.from({ length: 500 }, (_, index) => ({
      faktur: `BP${faker.string.numeric(3)}`,
      name: faker.commerce.productMaterial(),
      tempo: faker.location.city(1),
      status: "belum lunas",
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
        <BreadCrumbs link={["home", "master data", "Piutang"]} />

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
            Tambah Piutang
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
  const suplayer = data ? data[id] : "";

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
          {modalId === "modalDelete"
            ? "Hapus "
            : modalId === "modalUpdate"
            ? "Edit "
            : "Tambahkan Suplayer"}
          <span className="text-mygreen">{suplayer.name || ""}</span>
        </h3>
        {modalId === "modalDelete" ? (
          <div className="capitalize font-bold my-4">yakin hapus data !</div>
        ) : (
          <div className="mx-8">
            <InputText label="Kode Suplayer" value={suplayer.kode || ""} />
            <InputText label="Nama Suplayer" value={suplayer.name || ""} />
            <InputText label="Alamat" value={suplayer.alamat || ""} />
            <InputText label="Telp" value={suplayer.telp || ""} />
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

export default Piutang;
