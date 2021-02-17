import React, { useState } from "react";
import { Button, Container, TextField } from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startUpdateEmpresa } from "../../actions/empresa.actions";
import { useForm } from "../../hooks/useForm";

export const EditEmpresaScreen = () => {
  const dispatch = useDispatch()
  const { empresas } = useSelector((state) => state.empr);
  const [datosEmpresa, setDatosEmpresa] = useState();
  const [exist, setExist] = useState(false);
  const [editable, setEditable] = useState(false);
  /**
   *  Controles value, inputValue 
   */
  const [value, setValue] = useState(empresas[0])
  const [inputValue, setInputValue] = useState('')
  const [formValues, handleInputChange, reset] = useForm({
    idEmpresa: "",
    nombre: "",
    direccion: '',
    telefonoEmpresaContacto: '',
    nombrePersonaContacto: '',
    telefonoPersonaContacto: '',
    emailPersonaContacto: ''
  });

  const {
    idEmpresa,
    nombre,
    direccion,
    telefonoEmpresaContacto,
    nombrePersonaContacto,
    telefonoPersonaContacto,
    emailPersonaContacto } = formValues;
  // const handleSearch = () => {
  //   buscar(idEmpresa);
  // };
  const buscar = (idEmpresa) => {
    const emp = empresas.filter((empresa) => empresa.idEmpresa === idEmpresa);
    if (emp.length > 0) {
      setDatosEmpresa(emp);
      setExist(true);
      setEditable(false);
    } else {
      Swal.fire("Empresa No Encontrada", "", "warning");
      setExist(false);
      reset();
    }
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (nombre.length <= 1) {
      Swal.fire("El nombre es muy corto", "", "info");
      return;
    }
    /**
     * TODO: limpiar el formulario al actualizar
     */
    dispatch(startUpdateEmpresa({ idEmpresa: idEmpresa ? idEmpresa : value.idEmpresa, nombre: nombre }))
      ? (Swal.fire("La Empresa se actualizó con éxito", "", 'success'))
      : (Swal.fire("Hubo un problema", "No se pudo actualizar", 'err'))
    reset()
    setExist(false)
    setValue(empresas[0])
  };

  // const filtrarEmpresa = (sug) => {
  //   const filtered = empresas.filter(emp => {
  //     return emp.nombre.toLowerCase().includes(sug.toLowerCase());
  //   })
  //   console.log(filtered);
  // }
  return (
    <Container maxWidth="xl">
      <h1 className="h3 mb-3 fw-normal">Buscar Empresa</h1>
      <hr />
      <Autocomplete
        id="nombreEmpresaAutoComplete"
        name='nombreEmpresaAutoComplete'
        options={empresas}
        getOptionLabel={(option) => option.nombre}
        style={{ width: 300 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (value === null) {
            setValue(empresas[0])
          }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) =>
          <TextField
            {...params}
            variant="outlined"
            className="form-control"
            style={{ width: 300, marginBottom: 10 }}
          />}
      />
      <Button
        type="submit"
        onClick={() => buscar(value.idEmpresa)}
        variant='contained'
        color='primary'
        style={{ width: 300, marginBottom: 10 }}
      >
        Ver Información
          </Button>

      {exist ? (

        <Container maxWidth='sm'>
          <div style={{ marginTop: "20px" }}>

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
          </div>
          <div>
            <form onSubmit={handleUpdate}>
              <TextField
                id="nombre"
                name="nombre"
                type="text"
                value={nombre}
                onChange={handleInputChange}
                label={`${datosEmpresa[0].nombre} `}
                placeholder="Nombre Empresa"
                required
                variant="outlined"
                disabled={editable ? false : true}
                style={{ width: 300, marginBottom: 10 }}
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
                style={{ width: 300, marginBottom: 10 }}
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
                style={{ width: 300, marginBottom: 10 }}
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
                style={{ width: 300, marginBottom: 10 }}
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
                style={{ width: 300, marginBottom: 10 }}
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
                style={{ width: 300, marginBottom: 10 }}
              />
              {editable && (
                <Button
                  type="submit"
                  style={{ width: 300, marginBottom: 10 }}
                  variant='outlined'
                  color='primary'
                >
                  Guardar Cambios
                </Button>
              )}
            </form>
          </div>
        </Container>
      ) : (
          <div></div>
        )}
    </Container >
  );
};
