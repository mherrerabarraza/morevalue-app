import React from 'react'

export const DropDown = (data) => {
    //nombre Empresa
    const { nombre, idEmpresa } = data;
    return (
        
        <option key={idEmpresa} value={idEmpresa} className='dropdown-item'>{nombre}</option>
    )
}
