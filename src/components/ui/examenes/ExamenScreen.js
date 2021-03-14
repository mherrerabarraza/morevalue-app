import { Button, Paper } from '@material-ui/core'
import {
  DataGrid,
  GridToolbar,
  GridToolbarExport,
} from '@material-ui/data-grid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogDescargas } from '../../../actions/exam'
import { CalcularFecha } from '../helpers/CalcularFecha'
export const ExamenScreen = ({ datosExamenes }) => {
  const dispatch = useDispatch()
  /**
   * TODO: al presionar el rut del trabajador ir a la págiba del trabajador
   */

  const handleDownload = (e) => {
    console.log(
      'archivo descargado: ' +
        datosExamenes.nombreExamen +
        'descargado por: ' +
        datosExamenes.nombre
    )
    dispatch(
      startLogDescargas(
        datosExamenes.idContrato,
        datosExamenes.idUsuario,
        datosExamenes.idEmpresa,
        datosExamenes.idTrabajador,
        datosExamenes.nombreExamen,
        datosExamenes.url
      )
    )
  }

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
    { field: 'idTrabajador', headerName: 'Trabajador', width: 120 },
    { field: 'fechaCaducidad', headerName: 'Caduca', width: 120 },
    { field: 'nombreExamen', headerName: 'Documento', width: 130 },
    {
      field: 'url',
      headerName: 'Descarga',
      width: 130,
      renderCell: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleDownload}
          >
            <a
              href={params.value}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              Descargar
            </a>
          </Button>
        </div>
      ),
    },
  ]
  const rows = []
  datosExamenes.forEach((dp) => {
    rows.push({
      id: dp.id,
      idTrabajador: dp.idTrabajador,
      estado: {
        texto: CalcularFecha(dp.fechaCaducidad).texto,
        color: CalcularFecha(dp.fechaCaducidad).color,
      },
      idContrato: dp.idContrato,
      fechaCaducidad: new Date(dp.fechaCaducidad).toLocaleDateString(),
      idEmpresa: dp.idEmpresa,
      nombreExamen: dp.nombreExamen,
      url: dp.url,
    })
  })

  return (
    <Paper style={{ padding: '20px', margin: '10px 0px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        showToolbar
        autoHeight
        columnTypes
        density="comfortable"
        components={
          ({
            Toolbar: GridToolbar,
          },
          {
            Toolbar: GridToolbarExport,
          })
        }
      />
    </Paper>
  )
}
