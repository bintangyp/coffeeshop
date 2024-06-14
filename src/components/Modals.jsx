const Modals = ({ data, id, setSelectedId, modalId }) => {
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

export default Modals;
