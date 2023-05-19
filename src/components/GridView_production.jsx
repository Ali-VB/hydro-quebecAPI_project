import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineStock } from "react-icons/ai";
import { separateDayAndTime } from "./helpers";

const GridView_production = ({ productionData, showProductionGrid }) => {
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
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
    {
      field: "time",
      headerName: "Time",
      flex: 2,
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
    {
      field: "total",
      headerName: "Total",
      flex: 2,
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
    {
      field: "hydraulique",
      headerName: "Hydraulique",
      flex: 2,
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
    {
      field: "eolien",
      headerName: "Eolien",
      flex: 2,
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
    {
      field: "autres",
      headerName: "Autres",
      flex: 2,
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
    {
      field: "solaire",
      headerName: "Solaire",
      flex: 2,
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
    {
      field: "thermique",
      headerName: "Thermique",
      flex: 2,
      headerClassName: "bg-darkBlue text-white focus:text-orang-500 text-lg font-bold",
    },
  ];

  // Rows
  const rows = productionData.map((pd_item, index) => {

    // separate day and time using moment.js library
    const { dayString, timeString } = separateDayAndTime(pd_item);

    return {
      id: index + 1,
      day: dayString,
      time: timeString,
      total: pd_item.valeurs.total,
      hydraulique: pd_item.valeurs.hydraulique,
      eolien: pd_item.valeurs.eolien,
      autres: pd_item.valeurs.autres,
      solaire: pd_item.valeurs.solaire,
      thermique: pd_item.valeurs.thermique,
    };
  });

  return (
    <div className={showProductionGrid ? "block" : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">GRID VIEW FOR PRODUCTION</h2>
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

export default GridView_production;
