import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";

const BarChart_totalDemand = ({ totalDemandData, showTotalBar }) => {
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
        borderColor: "#F6F1F1",
        tension: 0.1,
        backgroundColor: ["#003f5c", "#488f31"],

        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={showTotalBar ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">BAR CHART FOR TOTAL DEMAND</h2>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart_totalDemand;
