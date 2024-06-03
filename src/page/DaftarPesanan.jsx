import React from "react";
import AdvancedFilterDemo from "../components/TableData";

const DaftarPesanan = () => {
  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <div className="uppercase font-bold">daftar pesanan</div>
        <div className="">
          <AdvancedFilterDemo />
        </div>
      </div>
    </div>
  );
};

export default DaftarPesanan;
