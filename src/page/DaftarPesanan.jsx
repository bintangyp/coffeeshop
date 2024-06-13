import TablesData from "../components/TablesData";
import { faker } from "@faker-js/faker/locale/id_ID";
import more from "../assets/icons/more.svg";
import { useEffect, useState } from "react";

const fieldName = [
  {
    name: "No Nota",
    selector: (row) => row.notrans,
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
    name: "Jam/Tanggal",
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
      name: faker.commerce.productName(),
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
        <div className="uppercase font-bold">daftar pesanan</div>
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
  const product = data ? data[id] : "";

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box w-11/12 lg:max-w-3xl ">
        <h3 className="font-bold text-lg">
          Transaksi{" "}
          <span className="text-mygreen">{product.notrans || ""}</span>
        </h3>
        <div className="mx-8">
          <div className="">{product.name}</div>
          <div className="">
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Jumlah</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cappuccino</td>
                    <td>2</td>
                    <td>Rp. 300000</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Americano</td>
                    <td>1</td>
                    <td>Rp. 200000</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>Total</td>
                    <td></td>
                    <td>Rp. {product.tagihan}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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

export default DaftarPesanan;
