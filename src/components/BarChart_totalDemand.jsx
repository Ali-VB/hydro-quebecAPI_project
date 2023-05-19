import React from "react";
import { Bar } from "react-chartjs-2";
import { AiOutlineStock } from "react-icons/ai";
import { getDayString, getTimeTotalDemandData } from "./helpers";

const BarChart_totalDemand = ({ totalDemandData, showTotalBar }) => {
  const totalDemandTime = getTimeTotalDemandData(totalDemandData);

  //make time Rounded
  const roundedTimesArray = totalDemandTime.filter((item) => {
    const [hour, minute, second] = item.time === undefined ? "00:00:00" : item.time.split(/:| [aA]/);
    return parseInt(minute) === 0 && parseInt(second) === 0;
  });
  console.log("roundedTimesArray.length", roundedTimesArray.length);
  // separate two days
  const dayStringOne = getDayString(totalDemandData, 0);
  const dayStringTwo = getDayString(totalDemandData, totalDemandData.length-1);
  console.log("dayStringOne", dayStringOne);
  console.log("dayStringTwo", dayStringTwo);
  // Bar Chart
  const labels = roundedTimesArray.map((td_item) => {
    return td_item.time;
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Day One ${dayStringOne}`,
        data: roundedTimesArray.map((td_item, index) => {
          if (index <= 24) {
            return td_item.value;
          } else {
            return null;
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
          if (index >= 24) {
            return td_item.value;
          } else {
            return null;
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
    <div className={showTotalBar ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">BAR CHART FOR TOTAL DEMAND</h2>
        <h2 className="text-darkBlue  font-semibold pt-1 pl-2">&#91;Rounded Time&#93;</h2>
      </div>

      <Bar data={data} />
    </div>
  );
};

export default BarChart_totalDemand;
