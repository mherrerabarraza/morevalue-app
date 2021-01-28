import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { startCrearNuevaEmpresa } from "../../actions/empresa.actions";
import { useForm } from "../../hooks/useForm";

export const CreateEmpresaScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    idEmpresa: "",
    nombre: "",
  });
  const { empresas } = useSelector((state) => state.empr);
  const { idEmpresa, nombre } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    const emp = empresas.filter((empresa) => empresa.idEmpresa === idEmpresa);
    if (emp.length > 0) {
      Swal.fire("Ya existe esta Empresa", "", "error");
      reset();
    } else {
      dispatch(
        startCrearNuevaEmpresa(idEmpresa, {
          idEmpresa: idEmpresa,
          nombre: nombre,
        })
      );
      Swal.fire("Empresa Creada con éxito", "", "success");
      reset();
    }
  };

  return (
    <div>
      <h3>Crear Empresa</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="idEmpresa"
          name="idEmpresa"
          type="text"
          value={idEmpresa}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Rut Empresa sin puntos ni guión"
          required
        />
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={nombre}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Nombre Empresa"
          required
        />
        <button
          type="Submit"
          className="w-100 btn btn-lg btn-primary"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          crear
        </button>
      </form>
    </div>
  );
};
