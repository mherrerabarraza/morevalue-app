import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const PermisosScreen = ({ id, ...permiso }) => {
    const dispatch = useDispatch();
    const { idEmpresa, idEquipo, fechaCaducidad, url, nombrePermiso } = permiso;
    const { nombre, idUsuario } = useSelector((state) => state.user);
    const handleSearchEmployee = () => {
        console.log("buscar employee");
        /**
         * muestra la pantalla del empleado de acuerdo a su rut
         */
    };

    // const handleDownload = () => {
    //     console.log(
    //         "archivo descargado: " + nombreExamen + "descargado por: " + nombre
    //     );
    //     dispatch(
    //         startLogDescargas(idUsuario, idEmpresa, idTrabajador, nombreExamen, url)
    //     );
    // };

    return (
        <tr>
            <td>{idEmpresa}</td>
            <td>{idEquipo}</td>
            <td>{new Date(fechaCaducidad).toLocaleDateString()}</td>
            <td>{nombrePermiso}</td>

            <td>
                <a
                    className="data"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                // onClick={handleDownload}
                >
                descargar
        </a>
            </td>
        </tr >
    );
}
