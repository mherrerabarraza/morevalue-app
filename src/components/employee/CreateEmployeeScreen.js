import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { startCrearTrabajadorEmpresa } from "../../actions/employee";
import { useForm } from "../../hooks/useForm";
import { Autocomplete } from "@material-ui/lab";
import { Button, Container, TextField } from "@material-ui/core";

export const CreateEmployeeScreen = () => {
  const dispatch = useDispatch();
  const { contratos } = useSelector((state) => state.cont)
  const { trabajadores } = useSelector((state) => state.trab);
  const { empresas } = useSelector(state => state.empr);



  //DropDown Empresa
  const [empresaValue, setEmpresaValue] = useState(empresas[0])
  const [empresaInputValue, setEmpresaInputValue] = useState('')
  //DropDown Contrato
  const [contratoValue, setContratoValue] = useState(contratos[0])
  const [contratoInputValue, setContratoInputValue] = useState('')



  const [formValues, handleInputChange, reset] = useForm({
    idEmpleado: "",
    nombre: "",
    idEmpresa: "",
  });

  const { idEmpleado, nombre } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    const tra = trabajadores.filter((employee) => employee.id === idEmpleado);
    if (tra.length > 0) {
      Swal.fire("Ya existe este trabajador", '', "error");
      reset();
    } else {
      dispatch(startCrearTrabajadorEmpresa(
        empresaValue.idEmpresa,
        contratoValue.id,
        idEmpleado,
        nombre));
      Swal.fire("Trabajador Creado con éxito", "", "success");
      reset();
    }
  };
  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Nuevo Trabajador</h1>
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
            const cont = contratos.filter(con => con.idEmpresa === newValue.idEmpresa)
            console.log(cont);
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
          id="idEmpleado"
          name="idEmpleado"
          style={{ width: 300, marginBottom: 10 }}
          variant="outlined"
          label="Rut"
          type="text"
          placeholder="Ingrese Rut sin puntos, ni guión"
          required
          autoFocus
          onChange={handleInputChange}
          value={idEmpleado}
        />
        <br />
        <TextField
          type="text"
          id="nombre"
          name="nombre"
          style={{ width: 300, marginBottom: 10 }}
          placeholder="Nombre"
          required
          autoFocus
          onChange={handleInputChange}
          value={nombre}
          variant="outlined"
          label="Nombre"
        />
        <Button
          style={{ width: 300, marginBottom: 10 }}
          type="submit"
          color='primary'
          variant='contained'

        >
          Crear Trabajador
        </Button>
      </form>
    </Container>
  );
};
