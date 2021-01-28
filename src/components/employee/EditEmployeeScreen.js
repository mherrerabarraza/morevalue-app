import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { CalendarModal } from "../ui/modal/CalendarModal";
import { uiOpenModal } from "../../actions/ui";
import { ExamenScreen } from "../ui/examenes/ExamenScreen";

export const EditEmployeeScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    idTrabajador: "",
  });

  const { idTrabajador } = formValues;
  const [exist, setExist] = useState(false);
  const [datosTrabajador, setDatosTrabajador] = useState([]);
  const [datosExamenes, setDatosExamenes] = useState([]);
  const { trabajadores } = useSelector((state) => state.trab);
  const { examenes } = useSelector((state) => state.exam);
  const { idEmpresa } = useSelector((state) => state.user);

  const handleSearch = (e) => {
    e.preventDefault();
    buscar(idTrabajador);
  };
  const buscar = (idTrabajador) => {
    const tra = trabajadores.filter((employee) => employee.id === idTrabajador);
    setDatosTrabajador(tra);
    const ex = examenes.filter(
      (examen) => examen.idTrabajador === idTrabajador
    );
    setDatosExamenes(ex);

    if (tra.length > 0) {
      // setDatosTrabajador(tra);
      // setDatosExamenes(ex);
      setExist(true);
    } else {
      Swal.fire("Trabajador No Encontrado", "", "warning");
      reset();
    }
  };
  const handleModal = () => {
    dispatch(uiOpenModal());
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <h1 className="h3 mb-3 fw-normal">Buscar Trabajador</h1>
        <hr />
        <input
          type="text"
          id="idTrabajador"
          name="idTrabajador"
          className="form-control"
          placeholder="Ingrese rut, ej: 123456789"
          required
          autoFocus
          onChange={handleInputChange}
          value={idTrabajador}
        />
        <button
          className="w-100 btn btn-lg btn-primary"
          style={{ marginTop: "10px", marginBottom: "10px" }}
          type="submit"
        >
          Buscar
        </button>
      </form>

      {exist ? (
        <div>
          <h3>Datos del Trabajador</h3>
          <div className="datosTrabajador">
            {datosTrabajador ? (
              <div>Nombre: {datosTrabajador[0].nombre}</div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            <h3>
              Examenes{" "}
              <span style={{ color: "green", cursor: "pointer" }}>
                <i className="fas fa-plus-circle" onClick={handleModal}>
                  {" "}
                </i>
              </span>
            </h3>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Rut Empresa</th>
                <th scope="col">Rut Trabajador</th>
                <th scope="col">Fecha Caducidad</th>
                <th scope="col">Nombre Examen</th>
                <th scope="col">Examen</th>
              </tr>
            </thead>
            <tbody>
              {datosExamenes ? (
                datosExamenes.map((examen) => (
                  <ExamenScreen key={examen.id} {...examen} />
                ))
              ) : (
                <>Loading...</>
              )}
            </tbody>
          </table>
          <CalendarModal idTrabajador={idTrabajador} idEmpresa={idEmpresa} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
