import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";

const BarChart_production = ({ productionData, showProductionBar }) => {
  const labels = productionData.map((pd_item) => {
    return new Date(pd_item.date).toLocaleString();
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: productionData.map((pd_item) => {
          return {
            total: pd_item.valeurs.total,
            demand: pd_item.valeurs.total,
            hydraulique: pd_item.valeurs.hydraulique,
            eolien: pd_item.valeurs.eolien,
            autres: pd_item.valeurs.autres,
            solaire: pd_item.valeurs.solaire,
            thermique: pd_item.valeurs.thermique,
          };
        }),

        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        // borderColor: [
        //   "rgb(255, 99, 132)",
        //   "rgb(255, 159, 64)",
        //   "rgb(255, 205, 86)",
        //   "rgb(75, 192, 192)",
        //   "rgb(54, 162, 235)",
        //   "rgb(153, 102, 255)",
        //   "rgb(201, 203, 207)",
        // ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={showProductionBar ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">BAR CHART FOR PRODUCTION</h2>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart_production;
