import TablesData from "../components/TablesData";
import { faker } from "@faker-js/faker/locale/id_ID";
import more from "../assets/icons/more.svg";
import { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";

const fieldName = [
  {
    name: "No Transaksi",
    selector: (row) => row.notrans,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Nama Pemesan",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Waktu Transaksi",
    selector: (row) => row.time,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Jumlah",
    selector: (row) => row.jumlah,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Tagihan",
    selector: (row) => row.tagihan,
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

const DaftarPesanan = () => {
  const [fakeOrder, setFakeOrder] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const data = Array.from({ length: 500 }, (_, index) => ({
      notrans: `PS${faker.string.numeric(3)}`,
      name: faker.person.fullName(),
      time: faker.commerce.price(),
      jumlah: faker.string.numeric(1),
      tagihan: faker.commerce.price({ symbol: "Rp." }),
      detail: <BtnMore id={index} setSelectedId={setSelectedId} />,
    }));
    setFakeOrder(data);
  }, []);
  return (
    <div className="p-4">
      {selectedId !== null && (
        <Modal
          data={fakeOrder}
          id={selectedId}
          setSelectedId={setSelectedId}
          modalId="modalDetail"
        />
      )}
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <BreadCrumbs link={["home", "daftar pesanan"]} />

        <div className="">
          {fakeOrder !== null ? (
            <TablesData data={fakeOrder} fieldName={fieldName} />
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
  const order = data ? data[id] : "";

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box w-11/12 lg:max-w-3xl ">
        <h3 className="font-bold text-lg">
          Transaksi{" "}
          <span className="text-myprimary">{order.notrans || ""}</span>
        </h3>
        <div className="mx-8 my-4">
          <div className="font-bold">
            Nama Pemesan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
            <span className="font-normal">{order.name}</span>
          </div>
          <div className="font-bold">
            Tanggal / Jam &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
            <span className="font-normal"> 14-06-2024 / 13:00:01 </span>
          </div>
          <div className="font-bold">
            Pembayaran
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
            <span className="text-mygreen">Cash</span>
          </div>
          <div className="font-bold">Daftar Pemesanan : </div>
          <div className="mt-2">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr className="">
                    <th className="font-bold text-sm">No.</th>
                    <th className="font-bold text-sm">Nama</th>
                    <th className="font-bold text-sm">Jumlah</th>
                    <th className="font-bold text-sm">Harga</th>
                    <th className="font-bold text-sm">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cappuccino</td>
                    <td>2</td>
                    <td>Rp. 200000</td>
                    <td>Rp. 400000</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Americano</td>
                    <td>1</td>
                    <td>Rp. 300000</td>
                    <td>Rp. 300000</td>
                  </tr>
                  <tr className=" text-mygreen">
                    <th></th>
                    <td></td>
                    <td></td>
                    <td className="font-bold">Total Harga</td>
                    <td className="font-bold">Rp. {order.tagihan}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex gap-4">
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

export default DaftarPesanan;
