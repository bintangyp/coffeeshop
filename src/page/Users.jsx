import BreadCrumbs from "../components/BreadCrumbs";
import addIcon from "../assets/icons/add.svg";
import updateIcon from "../assets/icons/update.svg";
import deleteIcon from "../assets/icons/delete.svg";
import { useState } from "react";
import InputText from "../components/form/InputText";

const Users = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4">
        <Modal data="" modalId="addUser" setSelectedId={setSelectedId} />
        <div className="overflow-x-auto w-4/5 mx-auto my-4 ">
          <BreadCrumbs link={["home", "master data", "users"]} />

          <div className="flex gap-4 float-end my-4">
            <button className="btn btn-sm h-10 bg-myprimary text-white hover:bg-myaccent hover:text-myprimary group">
              <img
                src={addIcon}
                className="h-3/5 invert brightness-0 group-hover:invert-0 group-hover:brightness-100"
                alt=""
                onClick={() => {
                  console.log("sampai sini");
                  // document.getElementById("addUser").showModal();
                }}
              />
              Tambah User
            </button>
          </div>
          <div className="font-bold text-lg">Daftar User</div>
          <table className="table  ">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Alamat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <div className="h-6 flex gap-2">
                    <img src={updateIcon} id="updateBtn" alt="" />
                    <img
                      src={deleteIcon}
                      alt=""
                      className="cursor-pointer h-full"
                    />
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ data, modalId, setSelectedId }) => {
  const user = data === "" ? "" : data;
  return (
    <>
      <dialog id={modalId} className="modal">
        <div
          className={
            modalId !== "modalDelete"
              ? "modal-box w-11/12 lg:max-w-3xl "
              : "modal-box"
          }
        >
          <h3 className="font-bold text-xl">
            {modalId === "modalDelete" ? "Hapus " : "Edit"}
            <span className="text-mygreen">{user.name || ""}</span>
          </h3>
          {modalId === "modalDelete" ? (
            <div className="capitalize font-bold my-4">yakin hapus data !</div>
          ) : (
            <div className="mx-8">
              <InputText label="Kode" value={user.kode || ""} />
              <InputText label="Nama" value={user.name || ""} />
              <InputText label="Email" value={user.name || ""} />
              <InputText label="Jabatan" value={user.stok || ""} />
              <InputText label="Alamat" value={user.satuan || ""} />
            </div>
          )}
          <div className="modal-action">
            <form method="dialog" className="flex gap-4">
              <button className="btn bg-myprimary text-mysecondary hover:bg-[#b77d4a]">
                {modalId === "modalDelete" ? "Hapus" : "Simpan"}
              </button>
              <button
                className="btn btn-error text-white"
                onClick={() => {
                  setSelectedId(null);
                }}
              >
                Batal
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Users;
