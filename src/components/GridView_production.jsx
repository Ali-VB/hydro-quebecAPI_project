import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineStock } from "react-icons/ai";
import moment from "moment";

const GridView_production = ({ productionData, showProductionGrid }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "day", headerName: "Day", width: 130 },
    { field: "time", headerName: "Time", width: 130 },
    { field: "total", headerName: "Total", width: 110 },
    { field: "hydraulique", headerName: "Hydraulique", width: 110 },
    { field: "eolien", headerName: "Eolien", width: 100 },
    { field: "autres", headerName: "Autres", width: 100 },
    { field: "solaire", headerName: "Solaire", width: 100 },
    { field: "thermique", headerName: "Thermique", width: 100 },
  ];

  const rows = productionData.map((pd_item, index) => {
    // separating day and time using moment.js library
    const dateString = pd_item.date;
    const momentObj = moment(dateString, "YYYY/M/D, h:mm:ss A");
    const dayString = momentObj.format("YYYY/M/D");
    const timeString = momentObj.format("h:mm:ss A");

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
        <h2 className="ml-2 pt-1">GRID FOR PRODUCTION</h2>
      </div>

      <div style={{ minHeight: "20em", minWidth: "22em" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
            hideFooterSelectedRowCount: false,
          }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
        />
      </div>
    </div>
  );
};

export default GridView_production;
