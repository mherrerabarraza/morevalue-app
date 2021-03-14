import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { startGetTodoPermisosEquipoID } from '../../actions/permisos.actions'
import { useForm } from '../../hooks/useForm'
import { PermisosScreen } from '../ui/permisos/PermisosScreen'
import { uiOpenModal } from '../../actions/ui'
import { PermisosModal } from '../ui/modal/PermisosModal'
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { AddCircleOutlined, Edit } from '@material-ui/icons'
import { green } from '@material-ui/core/colors'

export const EditEquipmentScreen = () => {
  const dispatch = useDispatch()
  const [formValues, handleInputChange, reset] = useForm({
    idEquipo: '',
  })
  const { idEquipo } = formValues
  const [exist, setExist] = useState(false)
  const [datosEquipo, setDatosEquipo] = useState([])
  const { equipos } = useSelector((state) => state.equi)
  const { permisosEquipos } = useSelector((state) => state.perm)

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(startGetTodoPermisosEquipoID(idEquipo))
    buscar(idEquipo)
  }
  const buscar = (idEquipo) => {
    const equ = equipos.filter((equipo) => equipo.id === idEquipo)

    setDatosEquipo(equ)
    if (equ.length > 0) {
      setExist(true)
    } else {
      Swal.fire('Equipo No Encontrado', '', 'warning')
      setExist(false)
      reset()
    }
  }
  const handleModal = () => {
    dispatch(uiOpenModal())
  }

  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h4">Editar Equipo</Typography>
        <Grid item xs={12} lg={6}>
          <form onSubmit={handleSearch}>
            <Paper
              elevation={3}
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '20px',
                margin: '10px 0px',
              }}
            >
              <TextField
                type="text"
                id="idEquipo"
                name="idEquipo"
                className="form-control"
                label="Ingrese patente"
                required
                autoFocus
                variant="outlined"
                placeholder="Ej: AABB11"
                style={{ width: 300, marginBottom: 10 }}
                onChange={handleInputChange}
                value={idEquipo}
              />
              <br />
              <Button
                style={{ width: 300, marginBottom: 10 }}
                type="submit"
                color="primary"
                variant="contained"
              >
                Buscar
              </Button>
            </Paper>
          </form>
        </Grid>
        {exist ? (
          <div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <Typography variant="h4">Datos del Equipo</Typography>
              <Edit
                style={{
                  fontSize: '2rem',
                  color: green[800],
                  cursor: 'pointer',
                }}
                // onClick={handleEdit}
              />
            </div>
            <Paper
              elevation={3}
              style={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '20px',
                margin: '10px 0px',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {datosEquipo ? (
                  <div>
                    <TextField
                      id="nombre"
                      name="nombre"
                      type="text"
                      // value={nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre Empresa"
                      label={`${datosEquipo[0].nombre} `}
                      required
                      variant="outlined"
                      // disabled={editable ? false : true}
                      disabled="true"
                      style={{ width: 300, margin: '10px' }}
                    />
                    <TextField
                      id="nombre"
                      name="nombre"
                      type="text"
                      // value={nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre Empresa"
                      label={`${datosEquipo[0].idEmpresa} `}
                      required
                      variant="outlined"
                      // disabled={editable ? false : true}
                      disabled="true"
                      style={{ width: 300, margin: '10px' }}
                    />
                    <TextField
                      id="nombre"
                      name="nombre"
                      type="text"
                      // value={nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre Empresa"
                      label={`${datosEquipo[0].idContrato} `}
                      required
                      variant="outlined"
                      // disabled={editable ? false : true}
                      disabled="true"
                      style={{ width: 300, margin: '10px' }}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </Paper>
            <div
              style={{
                display: 'flex',
              }}
            >
              <Typography variant="h4">Documentos del Equipo</Typography>
              <AddCircleOutlined
                style={{
                  fontSize: '2rem',
                  color: green[800],
                  cursor: 'pointer',
                }}
                onClick={handleModal}
              />
            </div>
            {/* Pasar directamente el permiso sin recorrer 1 a 1 para que no
                    haya duplicidad en la creación de la tabla */}
            {permisosEquipos ? (
              <PermisosScreen datosPermisos={permisosEquipos} />
            ) : (
              <CircularProgress />
            )}
            <PermisosModal
              idContrato={datosEquipo[0].idContrato}
              idEquipo={idEquipo}
              idEmpresa={datosEquipo[0].idEmpresa}
            />
          </div>
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  )
}
