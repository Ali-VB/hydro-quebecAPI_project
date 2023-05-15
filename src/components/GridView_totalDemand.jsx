import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineStock } from "react-icons/ai";

const GridView_totalDemand = ({ totalDemandData, showTotalGrid }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "date", headerName: "Date", width: 220 },
    { field: "demand", headerName: "Total Demand", width: 130 },
  ];

  const rows = totalDemandData.map((td_item, index) => {
    return {
      id: index + 1,
      date: new Date(td_item.date).toLocaleString(),
      demand: td_item.valeurs.demandeTotal,
    };
  });

  return (
    <div className={showTotalGrid ? "block " : "hidden"}>
      <div className=" flex justify-center align-middle py-8 font-medium text-amber-500">
        <AiOutlineStock size={30} />
        <h2 className="ml-2 pt-1">GRID FOR TOTAL DEMAND</h2>
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

export default GridView_totalDemand;
