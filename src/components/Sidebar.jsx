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
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);
  useEffect(() => {
    console.log(activePath);
  }, [activePath]);

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
            <NavItem
              label="dashboard"
              icon={dashboard}
              path={"/"}
              setActivePath={setActivePath}
              activePath={activePath}
            />
            <NavItem
              label="kasir"
              icon={kasir}
              path="/kasir"
              setActivePath={setActivePath}
              activePath={activePath}
            />
            <NavItem
              label="daftar pesanan"
              icon={dpesanan}
              path="daftar-pesanan"
              setActivePath={setActivePath}
              activePath={activePath}
            />
            <NavItem
              label="daftar menu"
              icon={dmenu}
              path="daftar-menu"
              setActivePath={setActivePath}
              activePath={activePath}
            />
            <NavItem
              label="pembelian"
              icon={pembelian}
              path="pembelian"
              setActivePath={setActivePath}
              activePath={activePath}
            />
            <NavItem
              label="laporan"
              icon={laporan}
              path="laporan"
              setActivePath={setActivePath}
              activePath={activePath}
            />
            <NavColItem />
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
const NavItem = ({ label, icon, path, setActivePath, activePath }) => {
  return (
    <li>
      <Link
        to={path}
        className={
          path === activePath
            ? "bg-myprimary text-mysecondary hover:bg-myprimary group p-3 shadow"
            : "bg-mysecondary text-myprimary hover:bg-myprimary group p-3 shadow"
        }
        onClick={() => setActivePath(path)}
      >
        <img
          src={icon}
          className={
            "group-hover:brightness-0 group-hover:invert " + path === activePath
              ? "brightness-0 invert group-hover:brightness-0 group-hover:invert "
              : "group-hover:brightness-0 group-hover:invert "
          }
          alt=""
        />
        <span className="text-myprimary group-hover:text-white capitalize text-md font-semibold">
          {label}
        </span>
      </Link>
    </li>
  );
};
const NavColItem = () => {
  return (
    <div className="collapse bg-mysecondary">
      <input type="checkbox" />
      <div className="collapse-title bg-mysecondary text-myprimary hover:bg-myprimary group p-3 flex items-center">
        <img
          src={mdata}
          className="group-hover:brightness-0 group-hover:invert"
          alt=""
        />
        <span className="text-myprimary group-hover:text-white capitalize text-md font-semibold">
          master data
        </span>
      </div>
      <div className="collapse-content">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
