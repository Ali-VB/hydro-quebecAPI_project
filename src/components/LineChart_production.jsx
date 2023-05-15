import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";

const LineChart_production = ({ productionData, showProductionLine }) => {
  const labels = productionData.map((pd_item) => {
    return new Date(pd_item.date).toLocaleString();
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "total",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.total;
        }),
        fill: false,
        borderColor: "#003f5c",
        tension: 0.1,
      },
      {
        label: "hydraulique",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.hydraulique;
        }),
        fill: false,
        borderColor: "#f4b677",
        tension: 0.1,
      },
      {
        label: "eolien",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.eolien;
        }),
        fill: false,
        borderColor: "#bc5090",
        tension: 0.1,
      },
      {
        label: "autres",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.autres;
        }),
        fill: false,
        borderColor: "#ff6361",
        tension: 0.1,
      },
      {
        label: "solaire",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.solaire;
        }),
        fill: false,
        borderColor: "#488f31",
        tension: 0.1,
      },
      {
        label: "thermique",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.thermique;
        }),
        fill: false,
        borderColor: "#6996b3",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={showProductionLine ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">LINE CHART FOR TOTAL DEMAND</h2>
      </div>
      <Line data={data} />
    </div>
  );
};

export default LineChart_production;
