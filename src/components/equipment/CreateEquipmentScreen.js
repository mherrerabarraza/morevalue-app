import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startCrearEquipoEmpresa } from '../../actions/equipos.actions'
import {
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'

export const CreateEquipmentScreen = () => {
  const dispatch = useDispatch()
  const { equipos } = useSelector((state) => state.equi)
  const { empresas } = useSelector((state) => state.empr)
  const { contratos } = useSelector((state) => state.cont)

  const [formValues, handleInputChange, reset] = useForm({
    idEquipo: '',
    nombre: '',
    idEmpresa: '',
    idContrato: '',
  })

  const { idEquipo, nombre, idEmpresa, idContrato } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    const eqp = equipos.filter((equipo) => equipo.id === idEquipo)
    if (eqp.length > 0) {
      Swal.fire('Ya existe este equipo', '', 'error')
      reset()
    } else if (idEmpresa === '' || idContrato === '') {
      Swal.fire('Debe Seleccionar Empresa y Contrato', '', 'warning')
      reset()
    } else {
      dispatch(
        startCrearEquipoEmpresa(
          idEmpresa,
          idContrato,
          idEquipo.toUpperCase(),
          nombre
        )
      )
      Swal.fire('Equipo Creado con éxito', '', 'success')
      reset()
    }
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <Paper
            elevation={3}
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '20px',
            }}
          >
            <Typography variant="h5">Nuevo Equipo</Typography>
            <form onSubmit={handleSubmit}>
              <FormControl variant="outlined">
                <Select
                  style={{ width: 300, margin: '20px' }}
                  native
                  value={idEmpresa}
                  onChange={handleInputChange}
                  label="Empresa"
                  required
                  inputProps={{
                    name: 'idEmpresa',
                    id: 'idEmpresa',
                  }}
                >
                  <option defaultValue key="selected">
                    Seleccione Empresa
                  </option>
                  {empresas.map((empresa) => (
                    <option
                      key={empresa.idEmpresa}
                      id={empresa.idEmpresa}
                      value={empresa.idEmpresa}
                    >
                      {empresa.nombre}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <Select
                  style={{ width: 300, margin: '20px' }}
                  native
                  required
                  value={idContrato}
                  onChange={handleInputChange}
                  inputProps={{
                    name: 'idContrato',
                    id: 'idContrato',
                  }}
                >
                  <option defaultValue key="selected">
                    Seleccione Contrato
                  </option>
                  {contratos
                    .filter((cont) => cont.idEmpresa === idEmpresa)
                    .map((contrato) => (
                      <option
                        key={contrato.id}
                        id={contrato.id}
                        value={contrato.idContrato}
                      >
                        {contrato.idContrato}
                      </option>
                    ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <TextField
                  id="idEquipo"
                  name="idEquipo"
                  style={{ width: 300, margin: '20px' }}
                  variant="outlined"
                  label="Patente o ID Equipo"
                  type="text"
                  required
                  autoFocus
                  onChange={handleInputChange}
                  value={idEquipo}
                />
              </FormControl>
              <FormControl variant="outlined">
                <TextField
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                  type="text"
                  style={{ width: 300, margin: '20px' }}
                  variant="outlined"
                  label="Nombre Equipo"
                  required
                  autoFocus
                />
              </FormControl>
              <FormControl variant="outlined">
                <Button
                  style={{ width: 300, margin: '20px' }}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Crear Eqiupo
                </Button>
              </FormControl>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
