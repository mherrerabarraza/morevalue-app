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


export const startGetTodosTrabajadores = () => {
  return async (dispatch) => {
    const trabajadores = [];
    db.collection("trabajadores")
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

export const getTodosTrabajadores = (trabajadores) => ({
  type: types.getTodosTrabajadores,
  payload: trabajadores,
});




export const trabajadoresLogout = () => ({
  type: types.trabajadoresLogout,
});

export const startCrearTrabajadorEmpresa = (idEmpresa, idContrato, idEmpleado, nombre) => {
  return async (dispatch) => {
    //crea usuario
    db.collection("trabajadores").doc(idEmpleado).set({
      idEmpresa: idEmpresa,
      idContrato: idContrato,
      nombre: nombre,
    });
    dispatch(crearTrabajadorEmpresa());
    //actualizar la lista de usuarios de la empresa
    // dispatch(startGetTrabajadoresIdEmpresa(idEmpresa));
    //actulizar la lista de todos los trabajadores
    dispatch(startGetTodosTrabajadores());
  };
};

export const crearTrabajadorEmpresa = () => ({
  type: types.crearTrabajadorEmpresa,
  payload: true,
});
export const trabajadorExist = () => ({
  type: types.crearTrabajadorEmpresa,
  payload: false,
});
