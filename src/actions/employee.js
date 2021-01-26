import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startGetTrabajadoresIdEmpresa = (idEmpresa) => {
  return async (dispatch) => {
    const trabajadores = [];
    db.collection("trabajadores")
      .where("idEmpresa", "==", idEmpresa)
      .get()
      .then((snapTrabajadores) => {
        snapTrabajadores.forEach((trabajador) => {
          trabajadores.push({
            id: trabajador.id,
            ...trabajador.data(),
          });
        });
        dispatch(getTrabajadoresIdEmpresa(trabajadores));
      });
  };
};

export const getTrabajadoresIdEmpresa = (trabajadores) => ({
  type: types.getTrabajadoresIdEmpresa,
  payload: trabajadores,
});

export const trabajadoresLogout = () => ({
  type: types.trabajadoresLogout,
});

export const startCrearTrabajadorEmpresa = (idEmpresa, idEmpleado, nombre) => {
  //TODO: Verificar si existe el usuairo antes, retornar
  return async () => {
    db.collection("trabajadores").doc(idEmpleado).set({
      idEmpresa: idEmpresa,
      nombre: nombre,
    });
  };
};
