const PrintPage = () => {
  return (
    <div onLoad={print()}>
      <div id="wrapper" style={{ letterSpacing: "1.5px" }} className="content">
        <div className="col-xs-1" style={{ paddingLeft: "0px" }}></div>
        <div className="col-xs-6" style={{ paddingLeft: "0px" }}>
          <p style={{ marginBottom: "3px", fontSize: "13px" }}>
            Planet Computer Store Bukittinggi
          </p>
          <p>
            <span style={{ paddingTop: "0px" }}>
              Jl. Perintis Kemerdekaan No.23, Aur Tajungkang Tengah Sawah, Kec.
              Guguk Panjang, Kota Bukittinggi, Sumatera Barat 26136
              <br /> Hp/Telp. 0822-8866-6688
            </span>
            <span style={{ paddingTop: "0px" }}>
              <br />
            </span>
          </p>
        </div>

        <div className="col-xs-5" style={{ fontSize: "12px" }}>
          <div className="col-xs-5">
            <div style={{ fontSize: "12px" }}>
              <span>Tanggal</span>
              <br />
              16-04-2024<span></span>
            </div>
            <div style={{ fontSize: "12px" }}>
              <span>Kode</span>
              <br />
              S0000001<span></span>
            </div>
          </div>
          <div className="col-xs-7">
            <div style={{ fontSize: "12px" }}>
              <span>Nama Pelanggan</span>
              <br />
              Diva<span></span>
            </div>
            <div style={{ fontSize: "12px" }}>
              <span>No. Telepon/Hp</span>
              <br />
              089635541044<span></span>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12"
          style={{
            minHeight: "100px !important",
            borderBottom: "1px dashed #000",
            marginBottom: "10px",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <div className="tracking-[4px] border-t-[1px dashed #000] text-[12px]">
            .::::::: TANDA TERIMA BARANG SERVIS :::::::.
          </div>
          <div className="border-b-[1px dashed #000] pl-0 pr-0 "></div>
          <table className="table table-responsive">
            <thead style={{ fontSize: "12px" }}></thead>
            <tbody style={{ fontSize: "12px" }}>
              <tr valign="top">
                <td className="pt-[15px]">
                  <div className="col-xs-3">
                    <span>Nama Barang / Unit</span>
                    <br />
                    ASUS X441{" "}
                  </div>
                  <div className="col-xs-3">
                    <span>Permasalahan/keluhan</span>
                    <br />
                    Mati Total{" "}
                  </div>
                  <div className="col-xs-3">
                    <span>Barang sertaan</span>
                    <br />{" "}
                  </div>
                  <div className="col-xs-3">
                    <span>Catatan perbaikan</span>
                    <br />
                    Cek dan Konfirmasi{" "}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-xs-5">
          <span>Estimasi biaya servis: Rp.0</span>
        </div>
        <div className="col-xs-7">
          <div className="col-xs-6 text-center">
            <span style={{ fontSize: "12px" }}>Pelanggan,</span>
            <br />
            <br />
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>Diva</span>
          </div>
          <div className="col-xs-6 text-center">
            <span style={{ fontSize: "12px" }}>Hormat kami,</span>
            <br />
            <br />
            <br />
            <br />
            <span style={{ fontSize: "12px" }}>Brana</span>
          </div>
        </div>

        <div className="pl-0 mt-[10px]">
          <span style={{ fontSize: "12px" }}>
            Terimakasih semoga tetap jadi langganan
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
