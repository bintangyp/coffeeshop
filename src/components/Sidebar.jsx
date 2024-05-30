import dopen from "../assets/icons/dopen-w.svg";
import dashboard from "../assets/icons/dashboard.svg";
import kasir from "../assets/icons/kasir.svg";
import dpesanan from "../assets/icons/dpesanan.svg";
import dmenu from "../assets/icons/dmenu.svg";
import pembelian from "../assets/icons/pembelian.svg";
import laporan from "../assets/icons/laporan.svg";
import mdata from "../assets/icons/mdata.svg";

const Sidebar = () => {
  return (
    <>
      <div className="drawer lg:drawer-open z-10 ">
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
            <NavItem label="dashboard" icon={dashboard} />
            <NavItem label="kasir" icon={kasir} />
            <NavItem label="daftar pesanan" icon={dpesanan} />
            <NavItem label="daftar menu" icon={dmenu} />
            <NavItem label="pembelian" icon={pembelian} />
            <NavItem label="laporan" icon={laporan} />
            <NavItem label="master data" icon={mdata} />
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
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
          <img src={dopen} alt="" />
        </label>
      </div>
    </>
  );
};
const NavItem = ({ label, icon }) => {
  return (
    <li>
      <button className="bg-mysecondary text-myprimary hover:bg-myprimary group p-3">
        <img
          src={icon}
          className="group-hover:brightness-0 group-hover:invert"
          alt=""
        />
        <span className="text-myprimary group-hover:text-white capitalize text-md font-semibold">
          {label}
        </span>
      </button>
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
