import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineStock } from "react-icons/ai";
import { separateDayAndTime } from "./helpers";

const GridView_totalDemand = ({ totalDemandData, showTotalGrid }) => {
  //Columns of Data Grid
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      headerClassName: "bg-darkGreen hover:text-white text-white  text-lg font-bold",
    },
    {
      field: "day",
      headerName: "Day",
      flex: 2,
      headerClassName: "bg-darkBlue hover:text-white text-white  text-lg font-bold",
    },
    {
      field: "time",
      headerName: "Time",
      flex: 2,
      headerClassName: "bg-darkBlue hover:text-white text-white  text-lg font-bold",
    },
    {
      field: "demand",
      headerName: "Total Demand",
      flex: 2,
      headerClassName: "bg-darkBlue hover:text-white text-white  text-lg font-bold",
    },
  ];

  //Rows of Data Grid
  const rows = totalDemandData.map((td_item, index) => {
    // separate day and time using moment.js library
    const { dayString, timeString } = separateDayAndTime(td_item);

    return {
      id: index + 1,
      day: dayString,
      time: timeString,
      demand: td_item.valeurs.demandeTotal,
    };
  });

  return (
    <div className={showTotalGrid ? "block " : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">GRID VIEW FOR TOTAL DEMAND</h2>
      </div>
      <div style={{ minHeight: "20em", minWidth: "22em" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
            hideFooterSelectedRowCount: false,
          }}
          pageSizeOptions={[10, 20, 50, 100]}
        />
      </div>
    </div>
  );
};

export default GridView_totalDemand;
