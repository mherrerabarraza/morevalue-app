import React from 'react'

export const PermisosScreen = ({ id, ...permiso }) => {
    const { idEmpresa, idEquipo, fechaCaducidad, url, nombrePermiso } = permiso;
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
        if (fechaCaducidad > p30.getTime() && fechaCaducidad <= p90.getTime()) {
            return `yellow`;
        }
        if (fechaCaducidad > p90.getTime()) {
            return `green`;
        }
    }
    return (
        <tr>
            <td><i className="fas fa-circle" style={{ color: `${calcularFecha(fechaCaducidad)}`, border: '1px solid black', borderRadius: '50px' }}></i></td>
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
