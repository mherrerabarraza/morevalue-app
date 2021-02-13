import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetPermisosPorVencerTodasLasEmpresas } from "../../actions/permisos.actions";
import { startGetExamenesPorVencerTodasLasEmpresas } from "../../actions/exam";
import { ExamenScreen } from "../ui/examenes/ExamenScreen";
import { PermisosScreen } from "./permisos/PermisosScreen";
import { CircularProgress } from "@material-ui/core";

export const DashBoardScreen = () => {
  const dispatch = useDispatch();
  const { examenes } = useSelector((state) => state.exam);
  const { permisos } = useSelector((state) => state.perm);
  return (
    <div className="container-fluid">
      <h1>Resumen:</h1>
      <hr />
      <h2>
        Documentos por Vencer{" "}
        <i
          className="fas fa-sync fa-xs"
          style={{ cursor: "pointer", color: "green" }}
          /**
           * Volver a cargar todos los exámenes
           */
          onClick={() => {
            dispatch(startGetExamenesPorVencerTodasLasEmpresas());
            dispatch(startGetPermisosPorVencerTodasLasEmpresas());
          }}
        ></i>
      </h2>
      {
        examenes
          ? <ExamenScreen datosExamenes={examenes} />
          : <CircularProgress />
      }
      {
        permisos
          ? <PermisosScreen datosPermisos={permisos} />
          : <CircularProgress color='secondary' />

      }
    </div>
  );
};
