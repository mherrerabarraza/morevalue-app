import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { startCrearNuevaEmpresa } from '../../actions/empresa.actions'
import { useForm } from '../../hooks/useForm'
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'

export const CreateEmpresaScreen = () => {
  const dispatch = useDispatch()
  const [formValues, handleInputChange, reset] = useForm({
    idEmpresa: '',
    nombre: '',
    direccion: '',
    telefonoEmpresaContacto: '',
    nombrePersonaContacto: '',
    telefonoPersonaContacto: '',
    emailPersonaContacto: '',
  })
  const { empresas } = useSelector((state) => state.empr)
  const {
    idEmpresa,
    nombre,
    direccion,
    telefonoEmpresaContacto,
    nombrePersonaContacto,
    telefonoPersonaContacto,
    emailPersonaContacto,
  } = formValues

  const handleSubmit = (event) => {
    event.preventDefault()
    const emp = empresas.filter((empresa) => empresa.idEmpresa === idEmpresa)
    if (emp.length > 0) {
      Swal.fire('Ya existe esta Empresa', '', 'error')
      reset()
    } else if (idEmpresa < 9) {
      Swal.fire('El rut proporcionado es muy corto', '', 'error')
      reset()
    } else {
      dispatch(
        /**
         * ARREGLAR ESTO
         */
        startCrearNuevaEmpresa({
          idEmpresa: idEmpresa,
          nombre: nombre,
          direccion: direccion,
          telefonoEmpresaContacto: telefonoEmpresaContacto,
          nombrePersonaContacto: nombrePersonaContacto,
          telefonoPersonaContacto: telefonoPersonaContacto,
          emailPersonaContacto: emailPersonaContacto,
        })
      )
      Swal.fire('Empresa Creada con éxito', '', 'success')
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
            <Typography variant="h5">Nueva Empresa</Typography>
            <form className="form" onSubmit={handleSubmit}>
              <TextField
                id="idEmpresa"
                name="idEmpresa"
                type="text"
                value={idEmpresa}
                onChange={handleInputChange}
                label="Rut Empresa"
                placeholder="Ej: 12345678-9"
                required
                variant="outlined"
                style={{ width: 300, margin: '20px' }}
              />
              <TextField
                id="nombre"
                name="nombre"
                type="text"
                value={nombre}
                onChange={handleInputChange}
                className="form-control"
                label="Nombre Empresa"
                placeholder="Nombre Empresa"
                required
                variant="outlined"
                style={{ width: 300, margin: '20px' }}
              />
              <TextField
                id="direccion"
                name="direccion"
                type="text"
                value={direccion}
                onChange={handleInputChange}
                className="form-control"
                label="Dirección"
                placeholder="Dirección"
                required
                variant="outlined"
                style={{ width: 300, margin: '20px' }}
              />
              <TextField
                id="telefonoEmpresaContacto"
                name="telefonoEmpresaContacto"
                type="text"
                value={telefonoEmpresaContacto}
                onChange={handleInputChange}
                className="form-control"
                label="Telefono Empresa"
                required
                variant="outlined"
                style={{ width: 300, margin: '20px' }}
              />
              <TextField
                id="nombrePersonaContacto"
                name="nombrePersonaContacto"
                type="text"
                value={nombrePersonaContacto}
                onChange={handleInputChange}
                className="form-control"
                label="Nombre Persona Contacto"
                required
                variant="outlined"
                style={{ width: 300, margin: '20px' }}
              />
              <TextField
                id="telefonoPersonaContacto"
                name="telefonoPersonaContacto"
                type="text"
                value={telefonoPersonaContacto}
                onChange={handleInputChange}
                className="form-control"
                label="Teléfono Persona Contacto"
                required
                variant="outlined"
                style={{ width: 300, margin: '20px' }}
              />
              <TextField
                id="emailPersonaContacto"
                name="emailPersonaContacto"
                type="email"
                value={emailPersonaContacto}
                onChange={handleInputChange}
                className="form-control"
                label="Email Persona Contacto"
                required
                variant="outlined"
                style={{ width: 300, margin: '20px' }}
              />
              <div>
                <Button
                  style={{ width: 300, margin: '20px' }}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  crear empresa
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
