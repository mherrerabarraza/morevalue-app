import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startGetTrabajadoresIdEmpresa = (idEmpresa) => {};

export const getTrabajadoresIdEmpresa = (trabajadores) => ({
  type: types.getTrabajadoresIdEmpresa,
  payload: trabajadores,
});

export const trabajadoresLogout = () => ({
  type: types.trabajadoresLogout,
});

export const test = (idEmpresa) => {
  const array = [1, 2, 3];
  return async (dispatch) => {
    dispatch(getTrabajadoresIdEmpresa(array));
  };
};
