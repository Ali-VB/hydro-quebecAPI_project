import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";

const LineChart_totalDemand = ({ totalDemandData, showTotalLine }) => {
  const labels = totalDemandData.map((td_item) => {
    return new Date(td_item.date).toLocaleString();
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Demand",
        data: totalDemandData.map((td_item) => {
          return td_item.valeurs.demandeTotal;
        }),
        fill: false,
        borderColor: "#ff6361",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={showTotalLine ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">LINE CHART FOR TOTAL DEMAND</h2>
      </div>
      <Line data={data} />
    </div>
  );
};

export default LineChart_totalDemand;
