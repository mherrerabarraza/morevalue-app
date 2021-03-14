import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import React from 'react'
import { Button, Paper } from '@material-ui/core'
import { CalcularFecha } from '../helpers/CalcularFecha'

export const PermisosScreen = ({ datosPermisos }) => {
  const columns = [
    {
      field: 'estado',
      headerName: 'Estado',
      width: 130,
      renderCell: (params) => (
        <div>
          <i
            className="fas fa-circle"
            style={{
              color: `${params.value.color}`,
              border: '1px solid black',
              borderRadius: '50px',
            }}
          ></i>
          <span> {params.value.texto}</span>
        </div>
      ),
    },
    { field: 'idEmpresa', headerName: 'Empresa', width: 120 },
    { field: 'idContrato', headerName: 'Contrato', width: 120 },
    { field: 'idEquipo', headerName: 'Equipo', width: 120 },
    { field: 'fechaCaducidad', headerName: 'Caduca', width: 120 },
    { field: 'nombrePermiso', headerName: 'Documento', width: 130 },
    {
      field: 'url',
      headerName: 'Descarga',
      width: 130,
      renderCell: (params) => (
        <Button variant="outlined" color="primary" size="small">
          <a
            href={params.value}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            Descargar
          </a>
        </Button>
      ),
    },
  ]
  const rows = []
  datosPermisos.forEach((dp) => {
    rows.push({
      id: dp.id,
      estado: {
        texto: CalcularFecha(dp.fechaCaducidad).texto,
        color: CalcularFecha(dp.fechaCaducidad).color,
      },
      idContrato: dp.idContrato,
      idEquipo: dp.idEquipo,
      fechaCaducidad: new Date(dp.fechaCaducidad).toLocaleDateString(),
      idEmpresa: dp.idEmpresa,
      nombrePermiso: dp.nombrePermiso,
      url: dp.url,
    })
  })

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '10px 0px' }}>
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
    </Paper>
  )
}
