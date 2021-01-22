import React from "react";
import { useSelector } from "react-redux";
import { ExamenesMain } from "./examenes/ExamenesMain";
// import { ExamenEntry } from "./ExamenEntry";

export const ExamenScreen = () => {
  const { examenes: trabajadores } = useSelector((state) => state.exam);
  if (!trabajadores) {
    return <h2>Cargando Datos: </h2>;
  }
  return (
    <div>
      {trabajadores.map((tr) => (
        <ExamenesMain key={tr.yd} {...tr} />
      ))}
    </div>
  );
};
