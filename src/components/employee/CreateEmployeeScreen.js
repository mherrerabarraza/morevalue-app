import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { startCrearTrabajadorEmpresa } from "../../actions/employee";
import { useForm } from "../../hooks/useForm";

export const CreateEmployeeScreen = () => {
  const { idEmpresa } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    idEmpleado: "",
    nombre: "",
    idEmpresa: idEmpresa,
  });

  const { idEmpleado, nombre } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startCrearTrabajadorEmpresa(idEmpresa, idEmpleado, nombre));
    Swal.fire("Trabajador Creado con éxito", "", "success");
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Nuevo Trabajador</h1>
        <hr />
        <input
          type="text"
          id="idEmpleado"
          name="idEmpleado"
          className="form-control"
          placeholder="Ingrese Rut sin puntos, ni guión"
          required
          autoFocus
          onChange={handleInputChange}
          value={idEmpleado}
        />
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
          required
          autoFocus
          onChange={handleInputChange}
          value={nombre}
        />
        <button
          className="w-100 btn btn-lg btn-primary"
          style={{ marginTop: "10px" }}
          type="submit"
        >
          Crear Trabajador
        </button>
      </form>
    </div>
  );
};
