import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { ExamenEntry } from "../ui/ExamenEntry";
import Swal from 'sweetalert2'

export const EditEmployeeScreen = () => {
  const [formValues, handleInputChange] = useForm({
    idEmpleado: "",
  });

  const { idEmpleado } = formValues;
  const [exist, setExist] = useState(false);
  const [datos, setDatos] = useState([]);
  const { examenes } = useSelector((state) => state.exam);

  const handleSearch = (e) => {
    e.preventDefault();
    buscar(idEmpleado);
    // console.log(examenes);
    // dispatch(startGetExamsIdTrabajador(idEmpleado));
  };
  const buscar = (idEmpleado) => {
    const output = examenes.filter((employee) => employee.id === idEmpleado);
    if (output.length > 0 ) {
      setDatos(output);
      setExist(true);
    }else{
      Swal.fire('Trabajador No Encontrado','','warning')
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <h1 className="h3 mb-3 fw-normal">Buscar Trabajador</h1>
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
        <button
          className="w-100 btn btn-lg btn-primary"
          style={{ marginTop: "10px" }}
          type="submit"
        >
          Buscar
        </button>
      </form>
      {exist ? (
        datos.map((data) => <ExamenEntry key={data.id} {...data} />)
      ) : (
        <></>
      )}
    </div>
  );
};
