import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { startCrearTrabajadorEmpresa } from "../../actions/employee";
import { useForm } from "../../hooks/useForm";
import { DropDown } from "../ui/drop-down/DropDown";

export const CreateEmployeeScreen = () => {
  // const { idEmpresa } = useSelector((state) => state.user);
  const { trabajadores } = useSelector((state) => state.trab);
  const { empresas } = useSelector(state => state.empr);
  const dispatch = useDispatch();


  const [formValues, handleInputChange, reset] = useForm({
    idEmpleado: "",
    nombre: "",
    idEmpresa: "",
  });

  const { idEmpleado, nombre, idEmpresa } = formValues;
  console.log(formValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    const tra = trabajadores.filter((employee) => employee.id === idEmpleado);
    if (tra.length > 0) {
      Swal.fire("Ya existe este trabajador", '', "error");
      reset();
    } else {
      dispatch(startCrearTrabajadorEmpresa(idEmpresa, idEmpleado, nombre));
      Swal.fire("Trabajador Creado con éxito", "", "success");
      reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Nuevo Trabajador</h1>
        <hr />
        <select
          id='idEmpresa'
          name='idEmpresa'
          className="form-select"
          required
          value={idEmpresa}
          onChange={handleInputChange}

        >
          <option defaultValue key='default' value='default' className='dropdown-item'>Selecciona una empresa</option>
          {
            empresas.map(empresa => <DropDown key={empresa.idEmpresa} {...empresa} />)
          }
        </select>
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
