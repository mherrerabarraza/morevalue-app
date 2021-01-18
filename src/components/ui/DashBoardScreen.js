import React from "react";
import { useSelector } from "react-redux";
import { ExamenScreen } from "./ExamenScreen";

export const DashBoardScreen = () => {
  const { examenes } = useSelector((state) => state.exam);
  return (
    <div>
      <h1>TODO:</h1>
      <ul>
        <li>
          cargar resumen todos los examenes, de todas las empresas, por vencer:
          <br />
          1.- obtener todos los trabajadores e ingresarlos a un array(obtener
          collection de trabajadores)
          <br />
          2.- con la lista de trabajadores, obtener la lista de exámenes,
          filtrar fecha de caducidad menor o igual a 60 días
        </li>
      </ul>
      <br />
      <ul>
      {
        examenes.map(ex=>(<div key={ex.key}>{ex.nombreExamen}</div>))
      }
      </ul>
    </div>
  );
};
