import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { CalendarModal } from "./modal/CalendarModal";

export const ExamenEntry = (examen) => {
  const dispatch = useDispatch();
  const { examenes, id: idEmpleado } = examen;
  console.log(examen);

  const handleModal = () => {
    dispatch(uiOpenModal());
  };

  return (
    <div>
      <h3>Nombre Trabajador</h3>
      <span>{examen.name}</span>
      <h3>
        Examenes{" "}
        <span style={{ color: "green", cursor: "pointer" }}>
          <i className="fas fa-plus-circle" onClick={handleModal}></i>
        </span>
      </h3>
      <div>
 
      </div>
      <CalendarModal idEmpleado={idEmpleado} />
    </div>
  );
};
