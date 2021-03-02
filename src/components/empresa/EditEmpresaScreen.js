import React, { useState } from "react"
import {
  Button,
  Container,
  FormControl,
  Grid,
  Select,
  TextField,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { startUpdateEmpresa } from "../../actions/empresa.actions"
import { useForm } from "../../hooks/useForm"
import { uiOpenModal } from "../../actions/ui"
import { ContratoModal } from "../ui/modal/ContratoModal"
import { ContratosScreen } from "../ui/contratos/ContratosScreen"

export const EditEmpresaScreen = () => {
  const dispatch = useDispatch()
  const { empresas } = useSelector((state) => state.empr)
  const { contratos } = useSelector((state) => state.cont)
  const [datosEmpresa, setDatosEmpresa] = useState(empresas[0])
  const [datosContratos, setDatosContratos] = useState([])
  const [exist, setExist] = useState(false)
  const [editable, setEditable] = useState(false)
  /**
   *  Controles value, inputValue
   */
  const [value, setValue] = useState(empresas[0])
  const [formValues, handleInputChange, reset] = useForm({
    idEmpresa: "",
    nombre: "",
    direccion: "",
    telefonoEmpresaContacto: "",
    nombrePersonaContacto: "",
    telefonoPersonaContacto: "",
    emailPersonaContacto: "",
  })
  const {
    idEmpresa,
    nombre,
    direccion,
    telefonoEmpresaContacto,
    nombrePersonaContacto,
    telefonoPersonaContacto,
    emailPersonaContacto,
  } = formValues

  const buscar = (idEmpresa) => {
    const emp = empresas.filter((empresa) => empresa.idEmpresa === idEmpresa)
    const con = contratos.filter((contrato) => contrato.idEmpresa === idEmpresa)
    if (emp.length > 0) {
      setDatosEmpresa(emp)
      setDatosContratos(con)
      setExist(true)
      setEditable(false)
    } else if (idEmpresa === "") {
      Swal.fire("Debe Seleccionar una Empresa", "", "warning")
      reset()
    } else {
      Swal.fire("Empresa No Encontrada", "", "warning")
      setExist(false)
      reset()
    }
  }

  const handleEdit = () => {
    setEditable(true)
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    if (nombre.length <= 1) {
      Swal.fire("El nombre es muy corto", "", "info")
      return
    }
    /**
     * TODO: limpiar el formulario al actualizar
     */
    dispatch(
      startUpdateEmpresa({
        idEmpresa: idEmpresa ? idEmpresa : value.idEmpresa,
        nombre: nombre,
      })
    )
      ? Swal.fire("La Empresa se actualizó con éxito", "", "success")
      : Swal.fire("Hubo un problema", "No se pudo actualizar", "err")
    reset()
    setExist(false)
    setValue(empresas[0])
  }
  const handleAddContrato = () => {
    dispatch(uiOpenModal())
  }
  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1 className="h3 mb-3 fw-normal">Buscar Empresa</h1>
          <FormControl variant="outlined">
            <Select
              style={{ width: 300, marginBottom: 10, marginTop: 10 }}
              native
              value={idEmpresa}
              onChange={handleInputChange}
              label="Empresa"
              required
              variant="outlined"
              inputProps={{
                name: "idEmpresa",
                id: "idEmpresa",
              }}
            >
              <option defaultValue key="selected">
                Seleccione una Empresa
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

            <Button
              type="submit"
              onClick={() => buscar(idEmpresa)}
              variant="contained"
              color="primary"
              style={{ width: 300, marginBottom: 10, marginTop: 10 }}
            >
              Ver Información
            </Button>
          </FormControl>
        </Grid>

        {exist ? (
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <h3>
              <span>
                Datos de la Empresa{" "}
                <i
                  className="fas fa-edit"
                  style={{ color: "green", cursor: "pointer" }}
                  onClick={handleEdit}
                ></i>
              </span>
            </h3>
            <FormControl variant="outlined">
              <form onSubmit={handleUpdate}>
                <TextField
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={nombre}
                  onChange={handleInputChange}
                  placeholder="Nombre Empresa"
                  label={`${datosEmpresa[0].nombre} `}
                  required
                  variant="outlined"
                  disabled={editable ? false : true}
                  style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                />
                <TextField
                  id="direccion"
                  name="direccion"
                  type="text"
                  value={direccion}
                  onChange={handleInputChange}
                  label={`${datosEmpresa[0].direccion} `}
                  placeholder={`${datosEmpresa[0].direccion} `}
                  required
                  variant="outlined"
                  disabled={editable ? false : true}
                  style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                />
                <TextField
                  id="telefonoEmpresaContacto"
                  name="telefonoEmpresaContacto"
                  type="text"
                  value={telefonoEmpresaContacto}
                  onChange={handleInputChange}
                  label={`${datosEmpresa[0].telefonoEmpresaContacto} `}
                  placeholder={`${datosEmpresa[0].telefonoEmpresaContacto} `}
                  required
                  variant="outlined"
                  disabled={editable ? false : true}
                  style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                />
                <TextField
                  id="nombrePersonaContacto"
                  name="nombrePersonaContacto"
                  type="text"
                  value={nombrePersonaContacto}
                  onChange={handleInputChange}
                  label={`${datosEmpresa[0].nombrePersonaContacto} `}
                  placeholder={`${datosEmpresa[0].nombrePersonaContacto} `}
                  required
                  variant="outlined"
                  disabled={editable ? false : true}
                  style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                />
                <TextField
                  id="telefonoPersonaContacto"
                  name="telefonoPersonaContacto"
                  type="text"
                  value={telefonoPersonaContacto}
                  onChange={handleInputChange}
                  label={`${datosEmpresa[0].telefonoPersonaContacto} `}
                  placeholder={`${datosEmpresa[0].telefonoPersonaContacto} `}
                  required
                  variant="outlined"
                  disabled={editable ? false : true}
                  style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                />
                <TextField
                  id="emailPersonaContacto"
                  name="emailPersonaContacto"
                  type="email"
                  value={emailPersonaContacto}
                  onChange={handleInputChange}
                  label={`${datosEmpresa[0].emailPersonaContacto} `}
                  placeholder={`${datosEmpresa[0].emailPersonaContacto} `}
                  required
                  variant="outlined"
                  disabled={editable ? false : true}
                  style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                />
                {editable && (
                  <Button
                    type="submit"
                    style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                    variant="outlined"
                    color="primary"
                  >
                    Guardar Cambios
                  </Button>
                )}
              </form>
            </FormControl>
            <ContratoModal idEmpresa={idEmpresa} />

            <Grid item xs={12} md={12} lg={12} xl={12}>
              <h3>
                <span>
                  Contratos Asociados{" "}
                  <i
                    class="fas fa-briefcase"
                    style={{ color: "green", cursor: "pointer" }}
                    onClick={handleAddContrato}
                  ></i>
                </span>
              </h3>
              {contratos ? (
                <ContratosScreen datosContratos={datosContratos} />
              ) : (
                <div>Loading</div>
              )}
            </Grid>
          </Grid>
        ) : (
          <div></div>
        )}
      </Grid>
    </Container>
  )
}
