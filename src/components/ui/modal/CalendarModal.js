import moment from "moment";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Modal from "react-modal";
import "./modal.css";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const now = moment().minutes(0).seconds(0);

Modal.setAppElement("#root");
export const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [titleValid, setTitleValid] = useState(true);
  const [formValues, setFormValues] = useState({
    nombreExamen: "Examen",
    start: now.toDate(),
  });
  const { nombreExamen } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (nombreExamen.trim().length < 2) {
      return setTitleValid(false);
    }
    setTitleValid(true);
  };

  const closeModal = () => {
    console.log("Cerrando...");
    // setIsOpen(false);
  };

//   closeModal();
  return (
    <Modal
      isOpen={true}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={500}
    >
      <h1> Nuevo examen </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className={`form-control ${!titleValid && "is-invalid"}`}
            placeholder="Nombre del examen"
            name="nombreExamen"
            autoComplete="off"
            value={nombreExamen}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Fecha Vencimiento</label>
          <DateTimePicker
            name="vencimiento"
            className="form-control"
            value={dateStart}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="form-group">
          <label>Adjuntar Archivo</label>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
          style={{ marginTop: "10px" }}
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
