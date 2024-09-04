import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Kasir from "../page/Kasir";
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
import Piutang from "../page/Piutang";

const Container = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="bg-mysecondary min-h-screen w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kasir" element={<Kasir />} />
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
          <Route path="master-data/piutang" element={<Piutang />} />
          <Route path="master-data/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Container;
