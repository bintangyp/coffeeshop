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
import Laporan from "../page/Laporan";
import PrintPage from "../page/PrintPage";
import StockOpname from "../page/StockOpname";
import Suplayer from "../page/Suplayer";
import Hutang from "../page/Hutang";

Chart.register(CategoryScale);
const Content = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="kasir" element={<Kasir />} />
      <Route path="daftar-pesanan" element={<DaftarPesanan />} />
      <Route path="daftar-menu" element={<DaftarMenu />} />
      <Route path="daftar-menu/print" element={<PrintPage />} />
      <Route path="pembelian" element={<DaftarPembelian />} />
      <Route path="laporan/penjualan" element={<Laporan />} />
      <Route path="master-data/bahan-pokok" element={<BahanPokok />} />
      <Route path="master-data/users" element={<Users />} />
      <Route path="master-data/opname" element={<StockOpname />} />
      <Route path="master-data/suplayer" element={<Suplayer />} />
      <Route path="master-data/hutang" element={<Hutang />} />
    </Routes>
  );
};

export default Content;
