import dopen from "../assets/icons/dopen-w.svg";
import dashboard from "../assets/icons/dashboard.svg";
import kasir from "../assets/icons/kasir.svg";
import dpesanan from "../assets/icons/dpesanan.svg";
import dmenu from "../assets/icons/dmenu.svg";
import pembelian from "../assets/icons/pembelian.svg";
import laporan from "../assets/icons/laporan.svg";
import mdata from "../assets/icons/mdata.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  return (
    <>
      <div className="drawer xl:drawer-open z-10 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2">
            {/* Sidebar content here */}
            <span className="text-myprimary text-2xl font-bold mx-auto my-3">
              Coffee Apps
            </span>
            <NavItem label="dashboard" icon={dashboard} path={"/"} />
            <NavItem label="kasir" icon={kasir} path="/kasir" />
            <NavItem
              label="daftar pesanan"
              icon={dpesanan}
              path="daftar-pesanan"
            />
            <NavItem label="daftar menu" icon={dmenu} path="daftar-menu" />
            <NavItem label="pembelian" icon={pembelian} path="pembelian" />
            <NavColItem
              icon={laporan}
              title="laporan"
              listLink={[
                { link: "laporan/penjualan", label: "Laporan Penjualan" },
                { link: "laporan/pengeluaran", label: "Laporan Pengeluaran" },
              ]}
            />
            <NavColItem
              icon={mdata}
              title="Master Data"
              listLink={[
                { link: "master-data/bahan-pokok", label: "Bahan Pokok" },
                { link: "master-data/opname", label: "Stok Opname" },
                { link: "master-data/suplayer", label: "Suplayer" },
                { link: "master-data/hutang", label: "Hutang" },
                { link: "master-data/piutang", label: "Piutang" },
                { link: "master-data/users", label: "Users" },
                { link: "master-data/profile", label: "Profile Usaha" },
              ]}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export const TongleBtn = () => {
  return (
    <>
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className=" drawer-button xl:hidden">
          <img src={dopen} alt="" />
        </label>
      </div>
    </>
  );
};
const NavItem = ({ label, icon, path }) => {
  return (
    <li>
      <Link
        to={path}
        className="bg-mysecondary text-myprimary hover:bg-myprimary group p-3 shadow"
      >
        <img
          src={icon}
          className="group-hover:brightness-0 group-hover:invert"
          alt=""
        />
        <span className="text-myprimary group-hover:text-white capitalize text-md font-semibold">
          {label}
        </span>
      </Link>
    </li>
  );
};
const NavColItem = ({ icon, title, listLink }) => {
  return (
    <div className="collapse bg-mysecondary shadow rounded-lg group">
      <input type="checkbox" className="min-h-0" />
      <div className="collapse-title min-h-0 bg-mysecondary text-myprimary group-hover:bg-myprimary p-3 flex items-center">
        <img
          src={icon}
          className="group-hover:brightness-0 group-hover:invert mr-2"
          alt=""
        />
        <span className="text-myprimary group-hover:text-white capitalize text-md font-semibold">
          {title}
        </span>
      </div>
      <div className="collapse-content">
        <ul className="menu bg-base-200 rounded-box mt-2">
          {listLink.map((link, id) => (
            <li key={id} className="py-1">
              <Link to={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
