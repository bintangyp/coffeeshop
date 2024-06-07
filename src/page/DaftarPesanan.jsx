import TablesData from "../components/TablesData";
import { faker } from "@faker-js/faker/locale/id_ID";
import more from "../assets/icons/more.svg";

const fieldName = [
  {
    name: "No Nota",
    selector: (row) => row.notrans,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Nama Barang",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Jam/Tanggal",
    selector: (row) => row.time,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Jumlah",
    selector: (row) => row.jumlah,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Tagihan",
    selector: (row) => row.tagihan,
    sortable: true,
    style: {
      borderRadius: "20px",
      backgroundColor: "#5686E1",
      margin: "10px",
      color: "white",
      justifyContent: "center",
    },
  },
  {
    name: "Detail",
    selector: (row) => row.detail,
    sortable: true,
    style: {
      justifyContent: "center",
    },
  },
];
const BtnMore = () => <img src={more} alt="" className="cursor-pointer " />;

const createOrder = () => ({
  notrans: `PS${faker.string.numeric(3)}`,
  name: faker.commerce.productName(),
  time: faker.commerce.price(),
  jumlah: faker.string.numeric(1),
  tagihan: faker.commerce.price({ symbol: "Rp." }),
  detail: <BtnMore />,
});

const createOrders = (numUsers = 5) =>
  new Array(numUsers).fill(undefined).map(createOrder);

const fakeOrder = createOrders(20);
const DaftarPesanan = () => {
  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4 ">
        <div className="uppercase font-bold">daftar pesanan</div>
        <div className="">
          <TablesData data={fakeOrder} fieldName={fieldName} />
        </div>
      </div>
    </div>
  );
};

export default DaftarPesanan;
