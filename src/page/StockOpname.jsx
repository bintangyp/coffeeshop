import { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import more from "../assets/icons/more.svg";
import { faker } from "@faker-js/faker";
import TablesData from "../components/TablesData";
import InputText from "../components/form/InputText";
import addIcon from "../assets/icons/add.svg";

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
    name: "User",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Waktu",
    selector: (row) => row.waktu,
    sortable: true,
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
const BtnMore = ({ id, setSelectedId }) => (
  <img
    src={more}
    alt=""
    onClick={async () => {
      await setSelectedId(id);
      await document.getElementById("modalDetail").showModal();
    }}
    className="cursor-pointer "
  />
);
const StockOpname = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [fakeOpname, setFakeOpname] = useState(null);
  useEffect(() => {
    const data = Array.from({ length: 5 }, (_, index) => ({
      kode: `PS${faker.string.numeric(3)}`,
      name: faker.commerce.productName(),
      waktu: "21-06-2024 / 14:00:00",
      detail: <BtnMore id={index} setSelectedId={setSelectedId} />,
    }));
    setFakeOpname(data);
  }, []);
  return (
    <div className="p-4">
      {selectedId !== null && (
        <>
          <Modal
            data={fakeOpname}
            id={selectedId}
            setSelectedId={setSelectedId}
            modalId="modalDetail"
          />
        </>
      )}
      <ModalOpname />
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <BreadCrumbs link={["home", "Stock Opname"]} />
        <div className="flex gap-4 float-end my-4">
          <button
            className="btn h-10 bg-myprimary text-white hover:bg-myaccent hover:text-myprimary group"
            onClick={() => document.getElementById("modalOpname").showModal()}
          >
            <img
              src={addIcon}
              className="h-3/5 invert brightness-0 group-hover:invert-0 group-hover:brightness-100"
              alt=""
            />
            Tambah Stock Opname
          </button>
        </div>
        <div className="">
          {fakeOpname !== null ? (
            <TablesData data={fakeOpname} fieldName={fieldName} />
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

const ModalOpname = () => {
  return (
    <dialog id="modalOpname" className="modal">
      <div className="modal-box max-w-3xl">
        <div className="modal-title font-semibold text-center text-lg uppercase">
          Tambahkan Stok Opname
        </div>
        <div className="modal-body my-4">
          <div className="grid grid-cols-2 gap-2">
            <InputText label="Kode Barang" placeholder="" />
            <InputText
              label="Nama Barang"
              disable={true}
              placeholder="Masukkan Kode Dahulu"
            />
            <InputText
              label="Jumlah System"
              disable={true}
              placeholder="Jumlah Fisik"
            />
            <InputText label="Jumlah Fisik" placeholder="" />
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex gap-4">
            <button
              className="btn bg-myprimary text-mysecondary hover:bg-[#b77d4a]"
              type="submit"
            >
              Simpan
            </button>
            <button className="btn btn-error text-white">Tutup</button>
          </form>
        </div>
      </div>
    </dialog>
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
        <div className="mt-2">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr className="">
                  <th className="font-bold text-sm">No.</th>
                  <th className="font-bold text-sm">Kode Bahan</th>
                  <th className="font-bold text-sm">Nama Bahan</th>
                  <th className="font-bold text-sm">Stok Sistem</th>
                  <th className="font-bold text-sm">Stok Fisik</th>
                  <th className="font-bold text-sm">Selisih</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>BP9045</td>
                  <td>Cappuccino</td>
                  <td>21</td>
                  <td>22</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>BP9045</td>
                  <td>Cappuccino</td>
                  <td>21</td>
                  <td>22</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex gap-4">
            <button
              className="btn btn-error text-white"
              onClick={() => {
                setSelectedId(null);
              }}
            >
              Tutup
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default StockOpname;
