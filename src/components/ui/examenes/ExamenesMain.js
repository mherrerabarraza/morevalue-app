import React from "react";

export const ExamenesMain = ({ id, name, ...otherProps }) => {
  console.log(otherProps);
  const { examenes } = otherProps;
  console.log(examenes);
  return (
    <div>
      <div>
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'red'}}>{name}</div>
        <div style={{display:'flex', flexDirection:'row'}}>{id}</div>
        <div>
          {examenes.map((ex) => (
            <span key={ex.id}>{ex.nombreExamen}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
