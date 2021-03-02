import React from "react"
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux"
import { startCrearTrabajadorEmpresa } from "../../actions/employee"
import { useForm } from "../../hooks/useForm"
import {
  Button,
  Container,
  FormControl,
  Grid,
  Select,
  TextField,
} from "@material-ui/core"

export const CreateEmployeeScreen = () => {
  const dispatch = useDispatch()
  const { contratos } = useSelector((state) => state.cont)
  const { trabajadores } = useSelector((state) => state.trab)
  const { empresas } = useSelector((state) => state.empr)

  const [formValues, handleInputChange, reset] = useForm({
    idEmpleado: "",
    nombre: "",
    // idEmpresa: empresas ? empresas[0] : [],
    idContrato: "",
  })
  const { idEmpleado, nombre, idEmpresa, idContrato } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    const tra = trabajadores.filter((employee) => employee.id === idEmpleado)
    if (tra.length > 0) {
      Swal.fire("Ya existe este trabajador", "", "error")
      reset()
    } else {
      dispatch(
        startCrearTrabajadorEmpresa(idEmpresa, idContrato, idEmpleado, nombre)
      )
      Swal.fire("Trabajador Creado con éxito", "", "success")
      reset()
    }
  }

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={6}>
          <h1 className="h3 mb-3 fw-normal">Nuevo Trabajador</h1>
          <form onSubmit={handleSubmit}>
            <FormControl variant="outlined">
              <Select
                style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                native
                value={idEmpresa}
                onChange={handleInputChange}
                label="Empresa"
                required
                inputProps={{
                  name: "idEmpresa",
                  id: "idEmpresa",
                }}
              >
                <option key="selection" defaultValue>
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
                style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                native
                required
                value={idContrato}
                onChange={handleInputChange}
                inputProps={{
                  name: "idContrato",
                  id: "idContrato",
                }}
              >
                <option defaultValue key="selected">
                  Seleccione Contrato
                </option>
                {contratos
                  .filter((cont) => cont.idEmpresa === idEmpresa)
                  .map((cnt) => (
                    <option
                      key={cnt.idContrato}
                      id={cnt.idContrato}
                      value={cnt.idContrato}
                    >
                      {cnt.idContrato}
                    </option>
                  ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined">
              <TextField
                id="idEmpleado"
                name="idEmpleado"
                style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                variant="outlined"
                label="Rut"
                type="text"
                placeholder="Ingrese Rut sin puntos, ni guión"
                required
                autoFocus
                onChange={handleInputChange}
                value={idEmpleado}
              />
            </FormControl>
            <FormControl variant="outlined">
              <TextField
                type="text"
                id="nombre"
                name="nombre"
                style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                placeholder="Nombre"
                required
                autoFocus
                onChange={handleInputChange}
                value={nombre}
                variant="outlined"
                label="Nombre"
              />
            </FormControl>
            <FormControl variant="outlined">
              <Button
                style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                type="submit"
                color="primary"
                variant="contained"
              >
                Crear Trabajador
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}
