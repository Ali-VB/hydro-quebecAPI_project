import React from "react";
import { Bar } from "react-chartjs-2";
import { AiOutlineStock } from "react-icons/ai";

function StackBarChart_production({ productionData, showProductionStack }) {
  const data = {
    labels: productionData.map((item) => item.date),
    datasets: [
      {
        label: "Total",
        data: productionData.map((item) => item.valeurs.total),
        backgroundColor: "#003f5c",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "Hydraulique",
        data: productionData.map((item) => item.valeurs.hydraulique),
        backgroundColor: "#f4b677",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "eolien",
        data: productionData.map((item) => item.valeurs.hydraulique),
        backgroundColor: "#bc5090",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "Autres",
        data: productionData.map((item) => item.valeurs.autres),
        backgroundColor: "#ff6361",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "solaire",
        data: productionData.map((item) => item.valeurs.autres),
        backgroundColor: "#488f31",
        borderWidth: 1,
        stack: "Stack 1",
      },
      {
        label: "thermique",
        data: productionData.map((item) => item.valeurs.autres),
        backgroundColor: "#6996b3",
        borderWidth: 1,
        stack: "Stack 1",
      },
    ],
  };

  return (
    <div className={showProductionStack ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">STACK CHART FOR PRODUCTION</h2>
      </div>
      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default StackBarChart_production;
