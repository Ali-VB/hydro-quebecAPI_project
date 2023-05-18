import React from "react";
import { Bar } from "react-chartjs-2";
import { AiOutlineStock } from "react-icons/ai";

function StackBarChart_production({ productionData, showProductionStack }) {
  const labels = productionData.map((pd_item) => {
    return new Date(pd_item.date).toLocaleString();
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total",
        //using the base 10 Logarithm of actual number to make a chart better
        data: productionData.map((item) => Math.log10(item.valeurs.total)),
        backgroundColor: "#003f5c",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "Hydraulique",
        data: productionData.map((item) => Math.log10(item.valeurs.hydraulique)),
        backgroundColor: "#f4b677",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "eolien",
        data: productionData.map((item) => Math.log10(item.valeurs.hydraulique)),
        backgroundColor: "#bc5090",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "Autres",
        data: productionData.map((item) => Math.log10(item.valeurs.autres)),
        backgroundColor: "#ff6361",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "solaire",
        data: productionData.map((item) => Math.log10(item.valeurs.autres)),
        backgroundColor: "#488f31",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "thermique",
        data: productionData.map((item) => Math.log10(item.valeurs.autres)),
        backgroundColor: "#6996b3",
        borderWidth: 1,
        stack: "Stack 1",
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return "Logarithmic Data" + " :" + value;
          },
        },
      },
    },
  };
  return (
    <div className={showProductionStack ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">STACK CHART FOR PRODUCTION</h2>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default StackBarChart_production;
