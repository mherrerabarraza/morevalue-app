import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetPermisosPorVencerTodasLasEmpresas } from "../../actions/permisos.actions";
import { startGetExamenesPorVencerTodasLasEmpresas } from "../../actions/exam";
import { ExamenScreen } from "../ui/examenes/ExamenScreen";
import { PermisosScreen } from "./permisos/PermisosScreen";
export const DashBoardScreen = () => {
  const dispatch = useDispatch();
  const { examenes } = useSelector((state) => state.exam);
  const { permisos } = useSelector((state) => state.perm);
  const state = useSelector(state => state.state)
  return (
    <div>
      <h1>Resumen:</h1>
      <hr />
      <h2>
        Examenes por Vencer{" "}
        <i
          className="fas fa-sync fa-xs"
          style={{ cursor: "pointer", color: "green" }}
          onClick={() => {
            dispatch(startGetExamenesPorVencerTodasLasEmpresas());
            dispatch(startGetPermisosPorVencerTodasLasEmpresas());
          }}
        ></i>
      </h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col" data-sortable="true" data-field="id">Rut Empresa</th>
            <th scope="col">Rut Trabajador</th>
            <th scope="col">Fecha Caducidad</th>
            <th scope="col">Nombre Examen</th>
            <th scope="col">Examen</th>
          </tr>
        </thead>
        <tbody>
          {examenes ? (
            examenes.map((examen) => (
              <ExamenScreen key={examen.id} {...examen} />
            ))
          ) : (
              <>Loading...</>
            )}
        </tbody>

      </table>
      <table className='table'>
        <thead>
          <tr>
            <th scope="col" data-sortable="true" data-field="id">Rut Empresa</th>
            <th scope="col">ID Equipo</th>
            <th scope="col">Fecha Caducidad</th>
            <th scope="col">Nombre Permiso</th>
            <th scope="col">Permiso</th>
          </tr>
        </thead>
        <tbody>
          {permisos ? (
            permisos.map((permiso) => (
              <PermisosScreen key={permiso.id} {...permiso} />
            ))
          ) : (
              <>Loading...</>
            )}
        </tbody>
      </table>
    </div>
  );
};
