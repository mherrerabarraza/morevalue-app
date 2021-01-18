import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startGetExamenesIdTrabajador = async (idTrabajador) => {
  const examenes = [];

  return async (dispatch) => {
    const examSnap = db
      .collection(`/trabajadores/${idTrabajador}/examenes`)
      .get();

    await examSnap.forEach((snapHijo) => {
      examenes.push({
        id: snapHijo.id,
        ...snapHijo.data(),
      });
    });
  };
};

export const getExamenesIdTrabajador = (examenes) => ({
  type: types.getExamsIdTrabajador,
  payload: examenes,
});
