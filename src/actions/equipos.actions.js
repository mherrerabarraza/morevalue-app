import { db } from '../firebase/firebase-config'
import { types } from '../types/types';

export const startCrearEquipoEmpresa = (idEmpresa, idEquipo, nombre) => {
    return async (dispatch) => {
        //crea equipo
        db.collection("equipos").doc(idEquipo).set({
            idEmpresa: idEmpresa,
            nombre: nombre,
        });
        dispatch(crearEquipoEmpresa());
        //actualizar la lista de equipos de la empresa
        dispatch(startGetEquiposIdEmpresa(idEmpresa));
    };
};

export const crearEquipoEmpresa = () => ({
    type: types.crearEquipoEmpresa,
    payload: true,
});

export const startGetEquiposIdEmpresa = (idEmpresa) => {
    return async (dispatch) => {
        const equipos = [];
        db.collection("equipos")
            .where("idEmpresa", "==", idEmpresa)
            .get()
            .then((snapEquipos) => {
                snapEquipos.forEach((equipo) => {
                    equipos.push({
                        id: equipo.id,
                        ...equipo.data(),
                    });
                });
                dispatch(getEquiposIdEmpresa(equipos));
            });
    };
};

export const getEquiposIdEmpresa = (equipos) => ({
    type: types.getEquiposIdEmpresa,
    payload: equipos,
});