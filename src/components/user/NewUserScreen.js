import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
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
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const NewUserScreen = () => {
  const dispatch = useDispatch()
  const [formValues, handleInputChange] = useForm({
    idEmpresa: '',
    idUsuario: '',
    nombre: '',
    isAdmin: '',
    password: '',
    email: '',
  })
  const { empresas } = useSelector((state) => state.empr)
  const { idEmpresa, idUsuario, nombre, isAdmin, password, email } = formValues

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(
      startRegisterWithEmailPasswordName({
        email: email,
        password: password,
        nombre: nombre,
        isAdmin: isAdmin,
        idEmpresa: idEmpresa,
        idUsuario: idUsuario,
      })
    )
    Swal.fire('Usuario Creado con éxito', '', 'success')
    // reset()
    // }
  }
  console.log(isAdmin)
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
            <Typography variant="h5">Nuevo Usuario</Typography>
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
                  <option key={'defEmpresa'} defaultValue>
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
                  value={isAdmin}
                  onChange={handleInputChange}
                  label="Empresa"
                  required
                  inputProps={{
                    name: 'isAdmin',
                    id: 'isAdmin',
                  }}
                >
                  <option defaultValue key="defRol">
                    Seleccione Rol
                  </option>
                  <option value={true} key="true">
                    Admin
                  </option>
                  <option value={false} key="false">
                    Usuario
                  </option>
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <TextField
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={nombre}
                  onChange={handleInputChange}
                  className="form-control"
                  label="Nombre Admin/Usuario"
                  placeholder="Nombre Admin/Usuario"
                  required
                  variant="outlined"
                  style={{ width: 300, margin: '20px' }}
                />
              </FormControl>
              <FormControl variant="outlined">
                <TextField
                  id="idUsuario"
                  name="idUsuario"
                  type="text"
                  value={idUsuario}
                  onChange={handleInputChange}
                  label="Rut Admin/Usuario"
                  placeholder="Ej: 12345678-9"
                  required
                  variant="outlined"
                  style={{ width: 300, margin: '20px' }}
                />
              </FormControl>
              <FormControl variant="outlined">
                <TextField
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={handleInputChange}
                  label="Email"
                  placeholder="Ej: usuario@empresa.com"
                  required
                  variant="outlined"
                  style={{ width: 300, margin: '20px' }}
                />
              </FormControl>
              <FormControl variant="outlined">
                <TextField
                  id="password"
                  name="password"
                  type="text"
                  value={password}
                  onChange={handleInputChange}
                  label="Constraseña"
                  required
                  variant="outlined"
                  style={{ width: 300, margin: '20px' }}
                />
              </FormControl>

              <Button
                style={{ width: 300, margin: '20px' }}
                type="submit"
                color="primary"
                variant="contained"
              >
                crear usuario
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
