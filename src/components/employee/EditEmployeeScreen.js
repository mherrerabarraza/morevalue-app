import React, { /*useEffect ,*/ useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import Swal from "sweetalert2"

import { CalendarModal } from "../ui/modal/CalendarModal"

import { uiOpenModal } from "../../actions/ui"
import { ExamenScreen } from "../ui/examenes/ExamenScreen"
import { startGetTodoExamenesTrabajadorID } from "../../actions/exam"
import {
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@material-ui/core"
// import { startGetTrabajadoresIdEmpresa } from "../../actions/employee";

export const EditEmployeeScreen = () => {
  const dispatch = useDispatch()
  const { trabajadores } = useSelector((state) => state.trab)
  const { examenes } = useSelector((state) => state.exam)
  const [exist, setExist] = useState(false)
  const [datosTrabajador, setDatosTrabajador] = useState([])
  const [formValues, handleInputChange, reset] = useForm({
    idTrabajador: "",
  })
  const { idTrabajador } = formValues

  /**
   * TODO: Ahora encuentra los examenes ONTHEFLY, pero necesito que
   * se muestren cuando se busca el trabajador
   */

  // useEffect(() => {
  //   // dispatch(startGetTodoExamenesTrabajadorID(idTrabajador));
  //   // dispatch(startGetTrabajadoresIdEmpresa(idEmpresa))
  // }, [idTrabajador, idEmpresa, dispatch])

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(startGetTodoExamenesTrabajadorID(idTrabajador))
    buscar(idTrabajador)
  }

  const buscar = (idTrabajador) => {
    const tra = trabajadores.filter((employee) => employee.id === idTrabajador)
    setDatosTrabajador(tra)
    if (tra.length > 0) {
      setExist(true)
    } else {
      Swal.fire("Trabajador No Encontrado", "", "warning")
      //evita error de busqueda de no existente, después de encontrado
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
        <h1 className="h3 mb-3 fw-normal">Buscar Trabajador</h1>
        <hr />
        <TextField
          type="text"
          id="idTrabajador"
          name="idTrabajador"
          className="form-control"
          placeholder="Ej: 12345678-9"
          required
          autoFocus
          onChange={handleInputChange}
          value={idTrabajador}
          variant="outlined"
          label="Rut Trabajador"
          style={{ width: 300, marginBottom: 10 }}
        />
        <br />
        <Button
          style={{ width: 300, marginBottom: 10 }}
          type="submit"
          color="primary"
          variant="contained"
        >
          Buscar Trabajador
        </Button>
      </form>

      {exist ? (
        <div>
          <h3>Datos del Trabajador</h3>
          <div className="datosTrabajador">
            {datosTrabajador ? (
              <div>Nombre: {datosTrabajador[0].nombre}</div>
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

          {examenes ? (
            <ExamenScreen datosExamenes={examenes} />
          ) : (
            <CircularProgress />
          )}
          <CalendarModal
            idTrabajador={idTrabajador}
            //debe ser el idEmpresa del Trabajador
            //no del user
            idEmpresa={datosTrabajador[0].idEmpresa}
            idContrato={datosTrabajador[0].idContrato}
          />
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  )
}
