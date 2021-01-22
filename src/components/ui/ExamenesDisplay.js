import React from "react";

export const ExamenesDisplay = ({ id, nombreExamen }) => {
  console.log(id, nombreExamen);
  return (
    <div>
      <span>Nombre:{nombreExamen}</span>
      <span>Nombre:{id}</span>
    </div>
  );
};
