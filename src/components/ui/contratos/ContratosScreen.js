import { DataGrid, GridToolbar } from "@material-ui/data-grid"
import React from "react"

export const ContratosScreen = ({ datosContratos }) => {
  const columns = [
    { field: "idContrato", headerName: "ID Contrato", width: 140 },
    { field: "nombreEmpresa", headerName: "Empresa", width: 120 },
    { field: "nombreFaena", headerName: "Faena", width: 180 },
    { field: "dotacion", headerName: "Dotación", width: 120 },
    { field: "fechaInicio", headerName: "Fecha Inicio", width: 200 },
    { field: "fechaCaducidad", headerName: "Fecha Caducidad", width: 200 },
  ]
  const rows = []
  datosContratos.forEach((dp) => {
    rows.push({
      id: dp.id,
      nombreEmpresa: dp.nombreEmpresa,
      nombreFaena: dp.nombreFaena,
      idContrato: dp.idContrato,
      dotacion: dp.dotacion,
      fechaCaducidad: new Date(dp.fechaCaducidad).toLocaleDateString(),
      fechaInicio: new Date(dp.fechaInicio).toLocaleDateString(),
    })
  })

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      showToolbar
      autoHeight
      columnTypes
      density="compact"
      components={{ Toolbar: GridToolbar }}
    />
  )
}
