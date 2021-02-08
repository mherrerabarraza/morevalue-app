import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogDescargas } from "../../../actions/exam";
export const ExamenScreen = ({ id, ...examen }) => {


  /**
   * TODO: al presionar el rut del trabajador ir a la págiba del trabajador
   */


  const dispatch = useDispatch();
  const { idEmpresa, idTrabajador, fechaCaducidad, url, nombreExamen } = examen;
  const { nombre, idUsuario } = useSelector((state) => state.user);
  const handleDownload = () => {
    console.log(
      "archivo descargado: " + nombreExamen + "descargado por: " + nombre
    );
    dispatch(
      startLogDescargas(idUsuario, idEmpresa, idTrabajador, nombreExamen, url)
    );
  };

  const calcularFecha = (fechaCaducidad) => {
    const p30 = new Date();
    const p60 = new Date()
    const p90 = new Date()
    p30.setDate(p30.getDate() + 30)
    p60.setDate(p60.getDate() + 60)
    p90.setDate(p90.getDate() + 90)
    if (fechaCaducidad <= p30.getTime()) {
      return `red`;
    }
    if (fechaCaducidad <= p60.getTime() && fechaCaducidad <= p90.getTime()) {
      return `yellow`;
    }
    if (fechaCaducidad > p90.getTime()) {
      return `green`;
    }
  }
  return (
    <tr>
      <td><i class="fas fa-circle" style={{ color: `${calcularFecha(fechaCaducidad)}`, border: '1px solid black', borderRadius: '50px' }}></i></td>
      <td>{idEmpresa}</td>
      <td /*onClick={handleSearchEmployee}*/>{idTrabajador}</td>
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
