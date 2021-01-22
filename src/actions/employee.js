import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


export const startGetTrabajadoresIdEmpresa = (idEmpresa) => {
  return async (dispatch) => {
    const trabSnap = await db
      .collection("trabajadores")
      .where("idEmpresa", "==", idEmpresa)
      .get();
    const trabajadoresState = [];
    trabSnap.forEach((trabajador) => {
      trabajadoresState.push({
        id: trabajador.id,
        ...trabajador.data(),
      });
    });
    //pasarlo al state
    dispatch(getTrabajadoresIdEmpresa(trabajadoresState));
    //retornar para usar
    return trabajadoresState;
  };
};

export const getTrabajadoresIdEmpresa = (trabajadores) => ({
  type: types.getTrabajadoresIdEmpresa,
  payload: trabajadores,
});

export const trabajadoresLogout = () => ({
  type: types.trabajadoresLogout,
});