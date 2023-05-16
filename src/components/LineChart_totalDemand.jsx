import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";
import moment from "moment";

const LineChart_totalDemand = ({ totalDemandData, showTotalLine }) => {
  const labels = totalDemandData.map((td_item) => {
    return new Date(td_item.date).toLocaleString();
  });

  // separating two days
  const dateStringOne = totalDemandData.map((item) => item.date);
  const momentObjOne = moment(dateStringOne, "YYYY/M/D, h:mm:ss A");
  const dayStringOne = momentObjOne.format("YYYY/M/D");

  const dateStringTwo = totalDemandData.map(
    (item, index) => index == 100 && item.date
  );
  const momentObjTwo = moment(dateStringTwo, "YYYY/M/D, h:mm:ss A");
  const dayStringTwo = momentObjTwo.format("YYYY/M/D");

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Day One ${dayStringOne}`,
        data: totalDemandData.map((td_item, index) => {
          if (index <= 99) {
            return td_item.valeurs.demandeTotal;
          }
        }),

        fill: false,
        borderColor: "#003f5c",
        tension: 0.1,
        backgroundColor: ["#003f5c"],
        borderWidth: 1,
      },
      {
        label: `Day Two ${dayStringTwo}`,
        data: totalDemandData.map((td_item, index) => {
          if (index >= 99) {
            return td_item.valeurs.demandeTotal;
          }
        }),

        fill: false,
        borderColor: "orange",
        tension: 0.1,
        backgroundColor: ["orange"],

        borderWidth: 1,
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
