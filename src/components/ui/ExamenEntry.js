import React from "react";
import { Examenes } from "./Examenes";
import { CalendarModal } from "./modal/CalendarModal";

export const ExamenEntry = (examen) => {
  const { examenes } = examen;
  examenes.map((exa) => console.log(exa));

  const handleModal = () => {
    console.log("click");
    <CalendarModal />;
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
        {examenes.map((exa) => (
          <Examenes key={exa.id} {...exa} />
        ))}
      </div>
      <CalendarModal />
    </div>
  );
};
