import { Route, Routes } from "react-router-dom";
import Container from "./page/Container";
import Dashboard from "./page/Dashboard";
import NotFoundPage from "./page/NotFoundPage";
import Login from "./page/Login";
import Kasir from "./page/Kasir";
import Profile from "./page/Profile";
import DaftarPesanan from "./page/DaftarPesanan";
import DaftarMenu from "./page/DaftarMenu";
import DaftarPembelian from "./page/DaftarPembelian";
import BahanPokok from "./page/BahanPokok";
import Users from "./page/Users";
import Laporan from "./page/Laporan";
import PrintPage from "./page/PrintPage";
import StockOpname from "./page/StockOpname";
import Suplayer from "./page/Suplayer";
import Hutang from "./page/Hutang";
import Piutang from "./page/Piutang";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Container />
          </ProtectedRoute>
        }
      >
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
      </Route>
    </Routes>
    // {/* <Content /> */}
    //   </div>
    // </div>
  );
}

export default App;
