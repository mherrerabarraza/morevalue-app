import moment from "moment"
import React, { useState } from "react"
import DateTimePicker from "react-datetime-picker"
import Modal from "react-modal"
import "./modal.css"
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux"
import { uiCloseModal } from "../../../actions/ui"
import { removeExamenUrl } from "../../../actions/exam"
import { Button, TextField } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
import { startCrearNuevoContrato } from "../../../actions/contract"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}
const now = moment().minutes(0).seconds(0)
Modal.setAppElement("#root")
export const ContratoModal = ({ idEmpresa }) => {
  const dispatch = useDispatch()
  const { modalOpen } = useSelector((state) => state.ui)
  const [fechaInicio, setFechaInicio] = useState(now.toDate())
  const [fechaCaducidad, setFechaCaducidad] = useState(now.toDate())
  const [titleValid, setTitleValid] = useState(true)
  const [formValues, setFormValues] = useState({
    idContrato: "",
    nombreEmpresa: "",
    nombreFaena: "",
    dotacion: "",
    fechaCaducidad: now.toDate(),
  })
  const { idContrato, nombreEmpresa, nombreFaena, dotacion } = formValues

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const handleStartDateChange = (e) => {
    setFechaInicio(e)
    setFormValues({
      ...formValues,
      fechaCaducidad: e,
    })
  }
  const handleEndDateChange = (e) => {
    setFechaCaducidad(e)
    setFormValues({
      ...formValues,
      fechaCaducidad: e,
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (idContrato.trim().length < 2) {
      return setTitleValid(false)
    }
    setTitleValid(true)
  }

  const closeModal = () => {
    dispatch(uiCloseModal())
    dispatch(removeExamenUrl())
    // setIsOpen(false);
  }
  const handleNewExamen = () => {
    dispatch(
      startCrearNuevoContrato({
        idContrato: idContrato,
        idEmpresa: idEmpresa,
        nombreEmpresa: nombreEmpresa,
        dotacion: dotacion,
        nombreFaena: nombreFaena,
        fechaInicio: fechaInicio.getTime(),
        fechaCaducidad: fechaCaducidad.getTime(),
      })
    )
    Swal.fire("Documento Creado con Éxito", "", "success")
    dispatch(uiCloseModal())
  }
  //   closeModal();
  return (
    <Modal
      isOpen={modalOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={500}
    >
      <h1> Nuevo Contrato </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <TextField
            type="text"
            className={`form-control ${!titleValid && "is-invalid"}`}
            name="idContrato"
            autoComplete="off"
            value={idContrato}
            onChange={handleInputChange}
            required
            autoFocus
            variant="outlined"
            style={{ width: 300, marginBottom: 10 }}
            label="Código o Nombre del contrato"
          />
          <TextField
            type="text"
            className={`form-control ${!titleValid && "is-invalid"}`}
            name="nombreEmpresa"
            autoComplete="off"
            value={nombreEmpresa}
            onChange={handleInputChange}
            required
            autoFocus
            variant="outlined"
            style={{ width: 300, marginBottom: 10 }}
            label="Nombre Empresa Asociada"
          />
          <TextField
            type="text"
            className={`form-control ${!titleValid && "is-invalid"}`}
            name="nombreFaena"
            autoComplete="off"
            value={nombreFaena}
            onChange={handleInputChange}
            required
            autoFocus
            variant="outlined"
            style={{ width: 300, marginBottom: 10 }}
            label="Nombre Faena"
          />
          <TextField
            type="text"
            className={`form-control ${!titleValid && "is-invalid"}`}
            name="dotacion"
            autoComplete="off"
            value={dotacion}
            onChange={handleInputChange}
            required
            autoFocus
            variant="outlined"
            style={{ width: 300, marginBottom: 10 }}
            label="Dotación"
          />
        </div>
        <div className="form-group">
          <label>Fecha Inicio</label>
          <DateTimePicker
            name="fechaInicio"
            className="form-control"
            value={fechaInicio}
            onChange={handleStartDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha Vencimiento</label>
          <DateTimePicker
            name="fechaCaducidad"
            className="form-control"
            value={fechaCaducidad}
            onChange={handleEndDateChange}
            required
          />
        </div>

        <Button
          type="submit"
          // className="btn btn-outline-primary btn-block"
          style={{
            marginTop: "10px",
            // display: `${url ? "" : "none"}`,
          }}
          color="primary"
          onClick={handleNewExamen}
          variant="outlined"
          startIcon={<SaveIcon />}
        >
          <span>Guardar</span>
        </Button>
      </form>
    </Modal>
  )
}
