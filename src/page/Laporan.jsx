import BreadCrumbs from "../components/BreadCrumbs";
import InputRadio from "../components/form/InputRadio";
import printIcon from "../assets/icons/print.svg";
import { useState } from "react";

const Laporan = () => {
  const [checkedId, setCheckedId] = useState(null);
  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <BreadCrumbs link={["home", "laporan"]} />
        <div className="">
          <ul className="flex flex-col gap-2">
            <InputRadio
              label="Hari Ini"
              id="hariIni"
              name="periodeLaporan"
              setCheckedId={setCheckedId}
            />
            <InputRadio
              label="Minggu Ini"
              id="mingguIni"
              name="periodeLaporan"
              setCheckedId={setCheckedId}
            />
            <InputRadio
              label="Bulan Ini"
              id="bulanIni"
              name="periodeLaporan"
              setCheckedId={setCheckedId}
            />
            <InputRadio
              label="Periode"
              id="periode"
              name="periodeLaporan"
              setCheckedId={setCheckedId}
            />
          </ul>
          {checkedId === "periode" ? (
            <div className="mt-4">
              <input
                type="date"
                className="border border-myprimary rounded-lg p-2"
              />
              <span className="mx-2">s/d</span>
              <input
                type="date"
                className="border border-myprimary rounded-lg p-2"
              />
            </div>
          ) : (
            ""
          )}
          <button className="btn h-10 bg-myprimary text-white hover:bg-[#b77d4a] group mt-4">
            <img src={printIcon} className="h-3/5 brightness-0 invert" alt="" />
            Cetak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
