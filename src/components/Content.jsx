import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Dashboard from "../page/Dashboard";
import { Route, Routes } from "react-router-dom";
import Kasir from "../page/Kasir";
import NotFoundPage from "../page/NotFoundPage";
import DaftarPesanan from "../page/DaftarPesanan";
import DaftarMenu from "../page/DaftarMenu";

Chart.register(CategoryScale);
const Content = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="kasir" element={<Kasir />} />
      <Route path="daftar-pesanan" element={<DaftarPesanan />} />
      <Route path="daftar-menu" element={<DaftarMenu />} />
    </Routes>
  );
};

export default Content;
