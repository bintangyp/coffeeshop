import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Dashboard from "../page/Dashboard";
import { Route, Routes } from "react-router-dom";
import Kasir from "../page/Kasir";
import NotFoundPage from "../page/NotFoundPage";
import DaftarPesanan from "../page/DaftarPesanan";
import DaftarMenu from "../page/DaftarMenu";
import DaftarPembelian from "../page/DaftarPembelian";
import BahanPokok from "../page/BahanPokok";
import Users from "../page/Users";

Chart.register(CategoryScale);
const Content = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="kasir" element={<Kasir />} />
      <Route path="daftar-pesanan" element={<DaftarPesanan />} />
      <Route path="daftar-menu" element={<DaftarMenu />} />
      <Route path="pembelian" element={<DaftarPembelian />} />
      <Route path="master-data/bahan-pokok" element={<BahanPokok />} />
      <Route path="master-data/users" element={<Users />} />
    </Routes>
  );
};

export default Content;
