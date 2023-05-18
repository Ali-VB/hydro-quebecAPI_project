import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";
import moment from "moment";

const LineChart_totalDemand = ({ totalDemandData, showTotalLine }) => {
  const totalDemandDataFormated = totalDemandData.map((td_item) => {
    return {
      time: moment(td_item.date).format("hh:mm:ss"),
      value: td_item.valeurs.demandeTotal == undefined ? 0 : td_item.valeurs.demandeTotal,
    };
  });
  // console.log("totalDemandDataFormated", totalDemandDataFormated);

  const roundedTimesArray = totalDemandDataFormated.filter((item) => {
    const [hour, minute, second] = item.time === undefined ? "00:00:00" : item.time.split(":");
    return parseInt(minute) === 0 && parseInt(second) === 0;
  });
  // console.log("ROUNDEDTIMESARRAY", roundedTimesArray);

 

  const labels = roundedTimesArray.map((td_item) => {
    return td_item.time;
  });

  // separating two days
  const dateStringOne = totalDemandData.map((item) => item.date);
  const momentObjOne = moment(dateStringOne, "YYYY/M/D, h:mm:ss A");
  const dayStringOne = momentObjOne.format("YYYY/M/D");

  const dateStringTwo = totalDemandData.map((item, index) => index == 100 && item.date);
  const momentObjTwo = moment(dateStringTwo, "YYYY/M/D, h:mm:ss A");
  const dayStringTwo = momentObjTwo.format("YYYY/M/D");

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Day One ${dayStringOne}`,
        data: roundedTimesArray.map((td_item, index) => {
          if (index <= 12) {
            return td_item.value;
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
        data: roundedTimesArray.map((td_item, index) => {
          if (index >= 12) {
            return td_item.value;
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
        <h2 className="text-darkBlue  font-semibold pt-1 pl-2">&#91;Rounded Time&#93;</h2>
      </div>
      <Line data={data} />
    </div>
  );
};

export default LineChart_totalDemand;
