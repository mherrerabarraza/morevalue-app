import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogDescargas } from "../../../actions/exam";
export const ExamenScreen = ({ id, ...examen }) => {
  const dispatch = useDispatch();
  const { idEmpresa, idTrabajador, fechaCaducidad, url, nombreExamen } = examen;
  const { nombre, idUsuario } = useSelector((state) => state.user);
  const handleSearchEmployee = () => {
    console.log("buscar employee");
    //TODO: registrar envento descarga
    //dispatch(startRegistroDescarga())
    //enviar a la página de busqueda de usuario
  };

  const handleDownload = () => {
    console.log(
      "archivo descargado: " + nombreExamen + "descargado por: " + nombre
    );
    dispatch(
      startLogDescargas(idUsuario, idEmpresa, idTrabajador, nombreExamen, url)
    );
  };

  return (
    <tr>
      <td>{idEmpresa}</td>
      <td onClick={handleSearchEmployee}>{idTrabajador}</td>
      <td>{new Date(fechaCaducidad).toLocaleDateString()}</td>
      <td>{nombreExamen}</td>

      <td>
        <a
          className="data"
          href={url}
          target="_blank"
          rel="noreferrer"
          onClick={handleDownload}
        >
          descargar
        </a>
      </td>
    </tr>
  );
};
