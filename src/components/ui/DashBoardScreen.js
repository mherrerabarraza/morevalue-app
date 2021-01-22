import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetTrabajadoresIdEmpresa } from "../../actions/employee";
import { startGetExamenesTodosTrabajadoresEmpresa } from "../../actions/exam";
import { ExamenScreen } from "./ExamenScreen";

export const DashBoardScreen = () => {
  const { idEmpresa } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!idEmpresa) {
      return <div>Cargando...</div>;
    } else {
      dispatch(startGetTrabajadoresIdEmpresa(idEmpresa));
      dispatch(startGetExamenesTodosTrabajadoresEmpresa(idEmpresa));
    }
  }, [idEmpresa,dispatch]);

  // if (!idEmpresa) {
  //   return <div>Cargando...</div>;
  // } else {
  //   dispatch(startGetTrabajadoresIdEmpresa(idEmpresa));
  //   dispatch(startGetExamenesTodosTrabajadoresEmpresa(idEmpresa));
  // }
  return (
    <div>
      <h1>Resumen:</h1>
      <hr/>
      {
        <div>
          <div>{idEmpresa ? <ExamenScreen /> : <div>Loading...</div>}</div>
        </div>
      }
    </div>
  );
};
