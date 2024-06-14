import BreadCrumbs from "../components/BreadCrumbs";
import addIcon from "../assets/icons/add.svg";
import updateIcon from "../assets/icons/update.svg";
import deleteIcon from "../assets/icons/delete.svg";

const Users = () => {
  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4">
        <div className="overflow-x-auto w-4/5 mx-auto my-4 ">
          <BreadCrumbs link={["home", "master data", "users"]} />
          <div className="flex gap-4 float-end my-4">
            <button className="btn btn-sm h-10 bg-myprimary text-white hover:bg-myaccent hover:text-myprimary group">
              <img
                src={addIcon}
                className="h-3/5 invert brightness-0 group-hover:invert-0 group-hover:brightness-100"
                alt=""
              />
              Tambah User
            </button>
          </div>
          <div className="font-bold text-lg">Daftar User</div>
          <table className="table  ">
            {/* head */}
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
                    <img
                      src={updateIcon}
                      id="updateBtn"
                      alt=""
                      className="cursor-pointer h-full"
                      onClick={async () => {
                        await setSelectedId(id);
                        await document
                          .getElementById("modalUpdate")
                          .showModal();
                      }}
                    />
                    <img
                      src={deleteIcon}
                      alt=""
                      className="cursor-pointer h-full"
                      onClick={async () => {
                        await setSelectedId(id);
                        await document
                          .getElementById("modalDelete")
                          .showModal();
                      }}
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

export default Users;
