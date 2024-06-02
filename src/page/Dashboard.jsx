import CardDashboard from "../components/CardDashboard";
import CardTerlaris from "../components/CardTerlaris";
import { BarChart } from "../components/Barchart";
import { Piechart } from "../components/Piechart";
import { SalesPerDay, TopProduct } from "../utils/Data";

const Dashboard = () => {
  const dataBar = {
    labels: SalesPerDay.map((data) => data.days),
    datasets: [
      {
        label: "Pejualan",
        data: SalesPerDay.map((data) => data.userGain),
        backgroundColor: ["#CB9363"],
      },
    ],
  };
  const dataPie = {
    labels: TopProduct.map((data) => data.product),
    datasets: [
      {
        label: "Terjual",
        data: TopProduct.map((data) => data.terjual),
        backgroundColor: ["#54a7aa", "#a44c15", "#424649"],
      },
    ],
  };
  return (
    <div className="">
      <CardDashboard />
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 mb-4 lg:mt-2 flex-grow justify-center  w-5/6 mx-auto">
        <CardTerlaris />
        <div className="flex-1 flex flex-col xl:flex-row gap-4">
          <div className="flex-1 bg-myaccent xl:w-1/3 rounded-xl h-fit p-5  ">
            <BarChart chartData={dataBar} />
          </div>
          <div className="flex-1 bg-myaccent xl:w-1/3 rounded-xl h-fit p-5  ">
            <Piechart chartData={dataPie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
