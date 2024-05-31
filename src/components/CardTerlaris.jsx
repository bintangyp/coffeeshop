import best from "../assets/icons/best.svg";
import cappuccino from "../assets/product/cappuccino.webp";
import espresso from "../assets/product/espresso.webp";
import americano from "../assets/product/americano.webp";

const CardTerlaris = () => {
  return (
    <div className="bg-myaccent flex-none lg:w-1/3 p-4 rounded-xl">
      <div className="flex items-center mb-4">
        <img src={best} alt="" />
        <span className="uppercase font-bold pl-2">menu terlaris</span>
      </div>
      <div className="">
        <ListItem name="cappuccino" img={cappuccino} sels="200 Gelas" />
        <ListItem name="americano" img={americano} sels="120 Gelas" />
        <ListItem name="espresso" img={espresso} sels="45 Gelas" />
        <ListItem name="espresso" img={espresso} sels="45 Gelas" />
        <ListItem name="espresso" img={espresso} sels="45 Gelas" />
      </div>
    </div>
  );
};

const ListItem = ({ name, img, sels }) => {
  return (
    <div className="w-full h-20 rounded-lg bg-mysecondary p-2 flex mb-3">
      <img src={img} alt="" className="h-full rounded-lg" />
      <div className=" my-auto ml-4">
        <p className="font-bold text-lg capitalize">{name}</p>
        <p>Terjual {sels} </p>
      </div>
    </div>
  );
};

export default CardTerlaris;
