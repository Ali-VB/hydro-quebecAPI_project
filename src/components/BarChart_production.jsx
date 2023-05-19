import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const BarChart_production = ({ productionData, showProductionBar }) => {
  const labels = productionData.map((pd_item) => {
    return new Date(pd_item.date).toLocaleString();
  });
  console.log(productionData);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "total",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.total;
        }),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "hydraulique",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.hydraulique;
        }),
        backgroundColor: "rgb(255, 205, 86)",
      },
      {
        label: "eolien",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.eolien;
        }),
        backgroundColor: ["rgb(54, 162, 235)"],
      },
      {
        label: "autres",
        data: productionData.map((pd_item) => {
          return pd_item.valeurs.autres;
        }),
        backgroundColor: "rgb(153, 102, 255)",
      },
      {
        label: "solaire",
        data: productionData.map((pd_item) => {
              return pd_item.valeurs.solaire;
        }),
        backgroundColor: "rgb(095, 113, 111)",
      },
      {
        label: "thermique",
        data: productionData.map((pd_item) => {
           return pd_item.valeurs.thermique;
        }),
        backgroundColor: "rgb(010, 010, 132)",
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className={showProductionBar ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">BAR CHART FOR PRODUCTION</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart_production;
