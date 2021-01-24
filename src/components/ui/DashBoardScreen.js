import React from "react";
import { useSelector } from "react-redux";
import { ExamenScreen } from "../ui/examenes/ExamenScreen";

export const DashBoardScreen = () => {
  const { idEmpresa } = useSelector((state) => state.user);
  const { examenes } = useSelector((state) => state.exam);
  const { trabajadores } = useSelector((state) => state.empl);
  console.log(trabajadores);
  return (
    <div>
      <h1>Resumen:</h1>
      <hr />
      {examenes ? (
        examenes.map((examen) => <ExamenScreen key={examen.id} {...examen} />)
      ) : (
        <div>Loading...</div>
      )}
      {
        // <div>
        //   <div>{idEmpresa ? <ExamenScreen /> : <div>Loading...</div>}</div>
        // </div>
      }
    </div>
  );
};
