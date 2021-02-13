import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startCrearEquipoEmpresa } from "../../actions/equipos.actions";
import { Button, Container, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export const CreateEquipmentScreen = () => {
    const dispatch = useDispatch();
    const { equipos } = useSelector(state => state.equi)
    const { empresas } = useSelector(state => state.empr);
    const { contratos } = useSelector((state) => state.cont)
    //DropDown Empresa
    const [empresaValue, setEmpresaValue] = useState(empresas[0])
    const [empresaInputValue, setEmpresaInputValue] = useState('')
    //DropDown Contrato
    const [contratoValue, setContratoValue] = useState(contratos[0])
    const [contratoInputValue, setContratoInputValue] = useState('')

    const [formValues, handleInputChange, reset] = useForm({
        idEquipo: "",
        nombre: "",
    });

    const { idEquipo, nombre } = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        const eqp = equipos.filter(equipo => equipo.id === idEquipo);
        if (eqp.length > 0) {
            Swal.fire("Ya existe este equipo", '', "error");
            reset();
        } else {
            dispatch(
                startCrearEquipoEmpresa(
                    empresaValue.idEmpresa, 
                    contratoValue.id, 
                    idEquipo.toUpperCase(), 
                    nombre));
            Swal.fire("Equipo Creado con éxito", "", "success");
            reset();
        }
    };

    return (
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Nuevo Equipo</h1>
                <hr />
                <Autocomplete
                    id="nombreEmpresaAutoComplete"
                    name='nombreEmpresaAutoComplete'
                    options={empresas}
                    getOptionLabel={(option) => option.nombre}
                    style={{ width: 300, marginBottom: 10 }}
                    value={empresaValue}
                    onChange={(event, newValue) => {
                        setEmpresaValue(newValue);
                        if (empresaValue === null) {
                            setEmpresaValue(empresas[0])
                        }
                    }}
                    inputValue={empresaInputValue}
                    onInputChange={(event, newInputValue) => {
                        setEmpresaInputValue(newInputValue);
                    }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="Empresa"
                            variant="outlined"
                        />}
                />
                <Autocomplete
                    id="nombreContratosAutoComplete"
                    name='nombreContratosAutoComplete'
                    options={contratos}
                    getOptionLabel={(option) => option.id}
                    style={{ width: 300, marginBottom: 10, marginTop: 10 }}
                    value={contratoValue}
                    onChange={(event, newValue) => {
                        setContratoValue(newValue);
                        if (contratoValue === null) {
                            setContratoValue(contratos[0])
                        }
                    }}
                    inputValue={contratoInputValue}
                    onInputChange={(event, newInputValue) => {
                        setContratoInputValue(newInputValue);
                    }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label="Contrato Asociado"
                            variant="outlined"
                        />}
                />
                <TextField
                    id="idEquipo"
                    name="idEquipo"
                    style={{ width: 300, marginBottom: 10 }}
                    variant="outlined"
                    label="Patente o ID Equipo"
                    type="text"
                    required
                    autoFocus
                    onChange={handleInputChange}
                    value={idEquipo}
                />
                <TextField
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                    type="text"
                    style={{ width: 300, marginBottom: 10 }}
                    variant="outlined"
                    label="Nombre Equipo"
                    required
                    autoFocus
                />
                <Button
                    style={{ width: 300, marginBottom: 10 }}
                    type="submit"
                    color='primary'
                    variant='contained'

                >
                    Crear Eqiupo
                </Button>
            </form>
        </Container>
    );
};
