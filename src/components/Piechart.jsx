import React from "react";
import { Pie } from "react-chartjs-2";

export const Piechart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Penjualan Coffee",
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};
