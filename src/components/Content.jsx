import React from "react";
import CardDashboard from "./CardDashboard";
import CardTerlaris from "./CardTerlaris";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../utils/Data";
import { BarChart } from "./Barchart";

Chart.register(CategoryScale);
const Content = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.days),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#CB9363"],
        borderColor: "#CB9363",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="">
      <CardDashboard />
      <div className="flex flex-wrap gap-4  mt-2 flex-grow justify-center  w-5/6 mx-auto">
        <CardTerlaris />
        <div className="bg-myaccent w-1/3 flex-1 rounded-xl">
          <div className="">
            <BarChart chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
