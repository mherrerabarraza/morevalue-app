import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
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
    nombre: ""
  });

  const { idEmpresa, nombre } = formValues;
  console.log(formValues);
  const handleSearch = () => {
    buscar(idEmpresa);
  };
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
    console.log(value.idEmpresa);
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
    <div className="container-fluid">

      <div className="row">
        <h3>Buscar Empresa</h3>
        <hr />
        <div className="col-md-6">
          <h4>Por Rut</h4>
          <input
            name="idEmpresa"
            id="idEmpresa"
            value={idEmpresa}
            onChange={handleInputChange}
            className="form-control"
            required
            placeholder="Ingrese Rut sin puntos ni guión"
          />

          <button
            className="w-100 btn btn-lg btn-primary"
            style={{ marginTop: "10px" }}
            type="submit"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
        <div className="col-md-6">
          <h4>Por Nombre</h4>
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
              />}
          />
          <button
            className="w-100 btn btn-lg btn-primary"
            style={{ marginTop: "10px" }}
            type="submit"
            onClick={() => buscar(value.idEmpresa)}
          >
            Buscar
          </button>


        </div>
        {exist ? (

          <div className="col-md-12">
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
                <label>Nombre</label>
                <input
                  name="nombre"
                  id="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                  className="form-control"
                  readOnly={editable ? false : true}
                  required
                  placeholder={`${datosEmpresa[0].nombre} `}
                />
                {editable && (
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    style={{ marginTop: "10px" }}
                    type="submit"
                  >
                    Guardar Cambios
                  </button>
                )}
              </form>
            </div>
          </div>
        ) : (
            <div></div>
          )}
      </div>
    </div >
  );
};
