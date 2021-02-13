import moment from "moment";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Modal from "react-modal";
import "./modal.css";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../../actions/ui";
import { removeExamenUrl, startUploadingExamen } from "../../../actions/exam";
import { startCrearNuevoPermiso, startGetTodoPermisosEquipoID } from "../../../actions/permisos.actions";
import { Button, TextField } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

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

export const PermisosModal = ({ idEquipo, idEmpresa, idContrato }) => {
    const dispatch = useDispatch();
    const { modalOpen } = useSelector((state) => state.ui);
    const { url } = useSelector((state) => state.exam);
    const [dateStart, setDateStart] = useState(now.toDate());
    const [titleValid, setTitleValid] = useState(true);
    const [formValues, setFormValues] = useState({
        nombrePermiso: "",
        fechaCaducidad: now.toDate(),
    });
    const { nombrePermiso } = formValues;

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
            fechaCaducidad: e,
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (nombrePermiso.trim().length < 2) {
            return setTitleValid(false);
        }
        setTitleValid(true);
    };

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(removeExamenUrl());
        // setIsOpen(false);
    };
    const handleNewPermiso = () => {
        dispatch(
            startCrearNuevoPermiso({
                idEquipo: idEquipo,
                idEmpresa: idEmpresa,
                idContrato: idContrato,
                nombrePermiso: nombrePermiso,
                fechaCaducidad: new Date(formValues.fechaCaducidad).getTime(),
                fechaCreacion: new Date().getTime(),
                url: url,
            })
        );
        //carga de inmediato el nuevo examen
        Swal.fire("Documento Creado con Éxito", "", "success");
        dispatch(uiCloseModal());
        dispatch(removeExamenUrl());

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            //si se adjuntó archivo, obtener la URL
            dispatch(startUploadingExamen(file));
        }
    };

    const handleArchivoExamenchange = () => {
        document.querySelector("#fileSelector").click();
    };
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
            <h1> Nuevo Documento </h1>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <TextField
                        type="text"
                        className={`form-control ${!titleValid && "is-invalid"}`}
                        name="nombrePermiso"
                        autoComplete="off"
                        value={nombrePermiso}
                        onChange={handleInputChange}
                        required
                        type="text"
                        autoFocus
                        variant='outlined'
                        style={{ width: 300, marginBottom: 10 }}
                        label='Nombre del Documento'
                    />
                </div>
                <div className="form-group">
                    <label>Fecha Vencimiento</label>
                    <DateTimePicker
                        name="vencimiento"
                        className="form-control"
                        value={dateStart}
                        onChange={handleStartDateChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Adjuntar Archivo</label>
                    <br />
                    <input
                        id="fileSelector"
                        type="file"
                        name="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        required
                    />
                    <Button
                        onClick={handleArchivoExamenchange}
                        color='primary'
                        variant='contained'
                    >
                        Archivo Documento
                    </Button>
                </div>

                <Button
                    type="submit"
                    // className="btn btn-outline-primary btn-block"
                    style={{
                        marginTop: "10px",
                        display: `${url ? "" : "none"}`,
                    }}
                    onClick={handleNewPermiso}
                    color='primary'
                    variant='outlined'
                    startIcon={<SaveIcon />}
                >
                    <span>Guardar</span>
                </Button>
            </form>
        </Modal>
    );
};
