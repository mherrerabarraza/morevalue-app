import { types } from '../types/types';
import { db } from "../firebase/firebase-config";

export const startCrearNuevoContrato = (idContrato, idEmpresa, fechaInicio, fechaCaducidad, nombre) => {
    return async (dispatch) => {
        await db.collection('contratos').doc(idContrato).set({
            idEmpresa: idEmpresa,
            fechaCaducidad: fechaCaducidad,
            fechaInicio: fechaInicio,
            nombre: nombre,
        })
        dispatch(crearNuevoContrato())
    }
}

export const crearNuevoContrato = () => ({
    type: types.crearNuevoContrato,
    payload: true,
})

export const startGetContratosIdEmpresa = (idEmpresa) => {
    return async (dispatch) => {
        const contratos = []
        await db.collection('contratos').where('idEmpresa', '==', idEmpresa).get()
            .then(snapContratos => {
                snapContratos.forEach(contrato => {
                    contratos.push({
                        id: contrato.id,
                        ...contrato.data()
                    })
                })
                dispatch(getContratosIdEmpresa(contratos))
            })
    }
}

export const getContratosIdEmpresa = (contratos) => ({
    type: types.getContratosIdEmpresa,
    payload: contratos,
})

export const startGetTodosContratos = () => {
    return async (dispatch) => {
        const contratos = []
        await db.collection('contratos').get()
            .then(snapContratos => {
                snapContratos.forEach(contrato => {
                    contratos.push({
                        id: contrato.id,
                        ...contrato.data()
                    })
                })
                dispatch(getTodosContratos(contratos))
            })
    }
}

export const getTodosContratos = (contratos) => ({
    type: types.getTodosContratos,
    payload: contratos,
})