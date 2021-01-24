import React from "react";

export const ExamenScreen = ({ id, ...examen }) => {
  const { idEmpresa, idTrabajador, fechaCaducidad, url, nombreExamen } = examen;
  return (
    <div>
      {id}
      {idEmpresa}
      <a href={url} target="_blank" rel="noreferrer">
        descargar
      </a>
    </div>
  );
};
