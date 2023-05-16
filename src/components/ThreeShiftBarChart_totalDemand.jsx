import React from "react";
import moment from "moment";
import "moment-range";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";
import { extendMoment } from "moment-range";

const momentWithRange = extendMoment(moment);

const ThreeShiftBarChart_totalDemand = ({ totalDemandData, showThreeShiftTotalBarChart }) => {
  //create object of data for each shifts

  const shiftsDataDayOne = totalDemandData.slice(0, 99).map((td_item) => ({
    date: td_item.date,
    demand: td_item.valeurs.demandeTotal,
  }));
  const shiftsDataDayTwo = totalDemandData.slice(99, 192).map((td_item) => ({
    date: td_item.date,
    demand: td_item.valeurs.demandeTotal,
  }));
    
console.log("totalDemandData", totalDemandData);
console.log("shiftsDataDayOne", shiftsDataDayOne);
console.log("shiftsDataDayTwo", shiftsDataDayTwo);
  // separate two days
  const dateStringOne = totalDemandData.map((item) => item.date);
  const momentObjOne = moment(dateStringOne, "YYYY/M/D, h:mm:ss A");
  const dayStringOne = momentObjOne.format("YYYY/M/D");

  const dateStringTwo = totalDemandData.map((item, index) => index == 100 && item.date);
  const momentObjTwo = moment(dateStringTwo, "YYYY/M/D, h:mm:ss A");
  const dayStringTwo = momentObjTwo.format("YYYY/M/D");

  // console.log("dayStringTwo", dayStringTwo);

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
  // Categorize the energy consumption data into shifts
  const shiftMorningDataDayOne = [];
  const shiftEveningDataDayOne = [];
  const shiftNightDataDayOne = [];

  const shiftMorningDataDayTwo = [];
  const shiftEveningDataDayTwo = [];
  const shiftNightDataDayTwo = [];

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

  const shiftMorningTotalDayOne = shiftMorningDataDayOne.reduce((acc, item) => acc + item.demand, 0);
  const shiftEveningTotalDayOne = shiftEveningDataDayOne.reduce((acc, item) => acc + item.demand, 0);
  const shiftNighTotalDayOne = shiftNightDataDayOne.reduce((acc, item) => acc + item.demand, 0);
  const shiftMorningTotalDayTwo = shiftMorningDataDayTwo.reduce((acc, item) => acc + item.demand, 0);
  const shiftEveningTotalDayTwo = shiftEveningDataDayTwo.reduce((acc, item) => acc + item.demand, 0);
  const shiftNighTotalDayTwo = shiftNightDataDayTwo.reduce((acc, item) => acc + item.demand, 0);


  const labels = [
    ` Night Shift From ${moment(shiftNightStartDayOne).format(" h:mm:ss a")}  ${moment(shiftNightEndDayOne).format(" h:mm:ss a")} `,
    ` Morning Shift From ${moment(shiftMorningStartDayOne).format(" h:mm:ss a")}  ${moment(shiftMorningEndDayOne).format(" h:mm:ss a")} `,
    ` Evening Shift From ${moment(shiftEveningStartDayOne).format(" h:mm:ss a")}  ${moment(shiftEveningEndDayOne).format(" h:mm:ss a")} `,
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
        data:  [shiftMorningTotalDayTwo, shiftEveningTotalDayTwo, shiftNighTotalDayTwo],

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
