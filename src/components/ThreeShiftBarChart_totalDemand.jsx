import React from "react";
import moment from "moment";
import "moment-range";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { AiOutlineStock } from "react-icons/ai";
import { extendMoment } from "moment-range";

const momentWithRange = extendMoment(moment);

const ThreeShiftBarChart_totalDemand = ({
  totalDemandData,
  showThreeShiftTotalBarChart,
}) => {
  const shiftsData = totalDemandData.map((td_item) => {
    return { date: td_item.date, demand: td_item.valeurs.demandeTotal };
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

console.log("dayStringTwo", dayStringTwo);
  // Define the shift ranges
  const shiftNightStart = moment(
    `${dayStringOne} '00:00:00 AM'`,
    "YYYY/M/D h:mm:ss A"
  );
  const shiftNightEnd = moment(
    `${dayStringOne} '8:00:00 AM'`,
    "YYYY/M/D h:mm:ss A"
  );
  const shiftMorningStart = moment(
    `${dayStringOne} '8:00:00 AM'`,
    "YYYY/M/D h:mm:ss A"
  );
  const shiftMorningEnd = moment(
    `${dayStringOne} '4:00:00 PM'`,
    "YYYY/M/D h:mm:ss A"
  );
  const shiftEveningStart = moment(
    `${dayStringOne} '4:00:00 PM'`,
    "YYYY/M/D h:mm:ss A"
  );
  const shiftEveningEnd = moment(
    ` ${dayStringTwo} '00:00:00 AM'`,
    "YYYY/M/D h:mm:ss A"
  );
  // Categorize the energy consumption data into shifts
  const shiftMorningData = [];
  const shiftEveningData = [];
  const shiftNightData = [];

  shiftsData.forEach((item) => {
    const date = moment(item.date, "YYYY/M/D h:mm:ss A");
    if (moment.range(shiftMorningStart, shiftMorningEnd).contains(date)) {
      shiftMorningData.push(item);
    } else if (
      moment.range(shiftEveningStart, shiftEveningEnd).contains(date)
    ) {
      shiftEveningData.push(item);
    } else if (moment.range(shiftNightStart, shiftNightEnd).contains(date)) {
      shiftNightData.push(item);
    }
  });

  const shiftMorningTotal = shiftMorningData.reduce(
    (acc, item) => acc + item.demand,
    0
  );
  const shiftEveningTotal = shiftEveningData.reduce(
    (acc, item) => acc + item.demand,
    0
  );
  const shiftNighTotal = shiftNightData.reduce(
    (acc, item) => acc + item.demand,
    0
  );
  console.log("shiftNightData", shiftNightData);

  const labels = [
    ` Night Shift From ${moment(shiftNightStart).format(
      " h:mm:ss a"
    )}  ${moment(shiftNightEnd).format(" h:mm:ss a")} `,
    ` Morning Shift From ${moment(shiftMorningStart).format(
      " h:mm:ss a"
    )}  ${moment(shiftMorningEnd).format(" h:mm:ss a")} `,
    ` Evening Shift From ${moment(shiftEveningStart).format(
      " h:mm:ss a"
    )}  ${moment(shiftEveningEnd).format(" h:mm:ss a")} `,
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: `Day One ${dayStringOne}`,
        data: [shiftMorningTotal, shiftEveningTotal, shiftNighTotal],

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
    <div className={showThreeShiftTotalBarChart ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">BAR CHART FOR TOTAL DEMAND Shifts</h2>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default ThreeShiftBarChart_totalDemand;
