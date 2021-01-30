import React, { useState } from "react";
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
  const [formValues, handleInputChange, reset] = useForm({
    idEmpresa: "",
  });
  const { idEmpresa, nombre } = formValues;

  const handleSearch = () => {
    buscar(idEmpresa);
  };
  const buscar = (idEmpresa) => {
    const emp = empresas.filter((empresa) => empresa.idEmpresa === idEmpresa);
    if (emp.length > 0) {
      // setDatosTrabajador(tra);
      // setDatosExamenes(ex);
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
    dispatch(startUpdateEmpresa({ idEmpresa: idEmpresa, nombre: nombre }))
      ? (Swal.fire("La Empresa se actualizó con éxito", "", 'success'))
      : (Swal.fire("Hubo un problema", "No se pudo actualizar", 'err'))
    reset()
    setExist(false)
  };

  return (
    <div>
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

      {exist ? (
        <div>
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
  );
};
