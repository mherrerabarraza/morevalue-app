import React from "react";
import { useSelector } from "react-redux";
import { ExamenScreen } from "../ui/examenes/ExamenScreen";
export const DashBoardScreen = () => {
  const { idEmpresa } = useSelector((state) => state.user);
  const { examenes } = useSelector((state) => state.exam);

  return (
    <div>
      <h1>Resumen:</h1>
      <hr />
      <h2>
        Examenes por Vencer{" "}
        <i
          className="fas fa-sync fa-xs"
          style={{ cursor: "pointer", color: "green"}}
        ></i>
      </h2>
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
          {examenes ? (
            examenes.map((examen) => (
              <ExamenScreen key={examen.id} {...examen} />
            ))
          ) : (
            <>Loading...</>
          )}
        </tbody>
      </table>
    </div>
  );
};