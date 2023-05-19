import React from "react";
import moment from "moment";
import { extendMoment } from "moment-range";
import { Bar } from "react-chartjs-2";
import { AiOutlineStock } from "react-icons/ai";
import { getDayString, createShiftData } from "./helpers";

const momentWithRange = extendMoment(moment);

const ThreeShiftBarChart_totalDemand = ({ totalDemandData, showThreeShiftTotalBarChart }) => {
  // separate two days
  const dayStringOne = getDayString(totalDemandData, 0);
  const dayStringTwo = getDayString(totalDemandData, totalDemandData.length - 1);

  //create object of data for each shifts
  const shiftsDataDayOne = createShiftData(totalDemandData.slice(0, 99));
  const shiftsDataDayTwo = createShiftData(totalDemandData.slice(99, 192));

  // Define the shift ranges
  //day one
  const shiftNightStartDayOne = moment(`${dayStringOne} '00:00:00 AM'`, "YYYY/M/D h:mm:ss A");
  const shiftNightEndDayOne = moment(`${dayStringOne} '8:00:00 AM'`, "YYYY/M/D h:mm:ss A");
  const shiftMorningStartDayOne = moment(`${dayStringOne} '8:00:00 AM'`, "YYYY/M/D h:mm:ss A");
  const shiftMorningEndDayOne = moment(`${dayStringOne} '4:00:00 PM'`, "YYYY/M/D h:mm:ss A");
  const shiftEveningStartDayOne = moment(`${dayStringOne} '4:00:00 PM'`, "YYYY/M/D h:mm:ss A");
  const shiftEveningEndDayOne = moment(` ${dayStringTwo} '00:00:00 AM'`, "YYYY/M/D h:mm:ss A");
  //day two
  const shiftNightStartDayTwo = moment(`${dayStringTwo} '00:00:00 AM'`, "YYYY/M/D h:mm:ss A");
  const shiftNightEndDayTwo = moment(`${dayStringTwo} '8:00:00 AM'`, "YYYY/M/D h:mm:ss A");
  const shiftMorningStartDayTwo = moment(`${dayStringTwo} '8:00:00 AM'`, "YYYY/M/D h:mm:ss A");
  const shiftMorningEndDayTwo = moment(`${dayStringTwo} '4:00:00 PM'`, "YYYY/M/D h:mm:ss A");
  const shiftEveningStartDayTwo = moment(`${dayStringTwo} '4:00:00 PM'`, "YYYY/M/D h:mm:ss A");
  const shiftEveningEndDayTwo = moment(` ${dayStringTwo} '23:45:00 PM'`, "YYYY/M/D h:mm:ss A");

  // Categorize the energy consumption data into shifts fro day One
  const shiftMorningDataDayOne = [];
  const shiftEveningDataDayOne = [];
  const shiftNightDataDayOne = [];

  shiftsDataDayOne.forEach((item) => {
    const date = moment(item.date, "YYYY/M/D h:mm:ss A");
    if (moment.range(shiftMorningStartDayOne, shiftMorningEndDayOne).contains(date)) {
      shiftMorningDataDayOne.push(item);
    } else if (moment.range(shiftEveningStartDayOne, shiftEveningEndDayOne).contains(date)) {
      shiftEveningDataDayOne.push(item);
    } else if (moment.range(shiftNightStartDayOne, shiftNightEndDayOne).contains(date)) {
      shiftNightDataDayOne.push(item);
    }
  });

  // Categorize the energy consumption data into shifts fro day Two
  const shiftMorningDataDayTwo = [];
  const shiftEveningDataDayTwo = [];
  const shiftNightDataDayTwo = [];

  shiftsDataDayTwo.forEach((item) => {
    const date = moment(item.date, "YYYY/M/D h:mm:ss A");
    if (moment.range(shiftMorningStartDayTwo, shiftMorningEndDayTwo).contains(date)) {
      shiftMorningDataDayTwo.push(item);
    } else if (moment.range(shiftEveningStartDayTwo, shiftEveningEndDayTwo).contains(date)) {
      shiftEveningDataDayTwo.push(item);
    } else if (moment.range(shiftNightStartDayTwo, shiftNightEndDayTwo).contains(date)) {
      shiftNightDataDayTwo.push(item);
    }
  });

  // Categorize the energy consumption data into shifts fro day Two
  const shiftMorningTotalDayOne = shiftMorningDataDayOne.reduce((acc, item) => acc + item.demand, 0);
  const shiftEveningTotalDayOne = shiftEveningDataDayOne.reduce((acc, item) => acc + item.demand, 0);
  const shiftNighTotalDayOne = shiftNightDataDayOne.reduce((acc, item) => acc + item.demand, 0);
  const shiftMorningTotalDayTwo = shiftMorningDataDayTwo.reduce((acc, item) => {
    if (item && typeof item.demand === "number") {
      return acc + item.demand;
    }
    return acc;
  }, 0);
  const shiftEveningTotalDayTwo = shiftEveningDataDayTwo.reduce((acc, item) => {
    if (item && typeof item.demand === "number") {
      return acc + item.demand;
    }
    return acc;
  }, 0);
  const shiftNighTotalDayTwo = shiftNightDataDayTwo.reduce((acc, item) => {
    if (item && typeof item.demand === "number") {
      return acc + item.demand;
    }
    return acc;
  }, 0);

  // Chart
  const labels = [
    ` Night Shift ${moment(shiftNightStartDayOne).format(" h:mm:ss A")} -${moment(shiftNightEndDayOne).format(
      " h:mm:ss A"
    )} `,
    ` Morning Shift ${moment(shiftMorningStartDayOne).format(" h:mm:ss A")} -${moment(shiftMorningEndDayOne).format(
      " h:mm:ss A"
    )} `,
    ` Evening Shift ${moment(shiftEveningStartDayOne).format(" h:mm:ss A")} -${moment(shiftEveningEndDayOne).format(
      " h:mm:ss A"
    )} `,
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Day One ${dayStringOne}`,
        data: [shiftMorningTotalDayOne, shiftEveningTotalDayOne, shiftNighTotalDayOne],
        fill: false,
        borderColor: "#003f5c",
        tension: 0.1,
        backgroundColor: ["#003f5c"],
        borderWidth: 1,
      },
      {
        label: `Day Two ${dayStringTwo}`,
        data: [shiftNighTotalDayTwo, shiftMorningTotalDayTwo, shiftEveningTotalDayTwo],
        fill: false,
        borderColor: "orange",
        tension: 0.1,
        backgroundColor: ["orange"],

        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={showThreeShiftTotalBarChart ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">BAR CHART FOR TOTAL DEMAND THREE SHIFTS</h2>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default ThreeShiftBarChart_totalDemand;
