import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineStock } from "react-icons/ai";

const GridView_production = ({ productionData, showProductionGrid }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "date", headerName: "Date", width: 220 },
    { field: "total", headerName: "Total", width: 130 },
    { field: "hydraulique", headerName: "Hydraulique", width: 130 },
    { field: "eolien", headerName: "Eolien", width: 130 },
    { field: "autres", headerName: "Autres", width: 130 },
    { field: "solaire", headerName: "Solaire", width: 130 },
    { field: "thermique", headerName: "Thermique", width: 130 },
  ];

  const rows = productionData.map((pd_item, index) => {
    return {
      id: index + 1,
      date: new Date(pd_item.date).toLocaleString(),
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
