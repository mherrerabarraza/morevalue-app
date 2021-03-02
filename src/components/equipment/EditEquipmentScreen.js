import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { startGetTodoPermisosEquipoID } from "../../actions/permisos.actions"
import { useForm } from "../../hooks/useForm"
import { PermisosScreen } from "../ui/permisos/PermisosScreen"
import { uiOpenModal } from "../../actions/ui"
import { PermisosModal } from "../ui/modal/PermisosModal"
import {
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@material-ui/core"

export const EditEquipmentScreen = () => {
  const dispatch = useDispatch()
  const [formValues, handleInputChange, reset] = useForm({
    idEquipo: "",
  })
  const { idEquipo } = formValues
  const [exist, setExist] = useState(false)
  const [datosEquipo, setDatosEquipo] = useState([])
  const { equipos } = useSelector((state) => state.equi)
  const { permisos } = useSelector((state) => state.perm)

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
      Swal.fire("Equipo No Encontrado", "", "warning")
      setExist(false)
      reset()
    }
  }
  const handleModal = () => {
    dispatch(uiOpenModal())
  }

  return (
    <Container maxWidth="xl">
      <form onSubmit={handleSearch}>
        <h1 className="h3 mb-3 fw-normal">Buscar Eqiupo</h1>
        <hr />
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
      </form>

      {exist ? (
        <div>
          <h3>Datos del Equipo</h3>
          <div className="datosTrabajador">
            {datosEquipo ? (
              <div>Nombre: {datosEquipo[0].nombre}</div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            <h3>
              Documentos{" "}
              <span style={{ color: "green", cursor: "pointer" }}>
                <i className="fas fa-plus-circle" onClick={handleModal}>
                  {" "}
                </i>
              </span>
            </h3>
          </div>
          {/* Pasar directamente el permiso sin recorrer 1 a 1 para que no
                    haya duplicidad en la creación de la tabla */}
          {permisos ? (
            <PermisosScreen datosPermisos={permisos} />
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
  )
}
