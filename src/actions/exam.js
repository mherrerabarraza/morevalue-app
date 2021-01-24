import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startGetExamenesPorVencerPorIdEmpresa = (idEmpresa) => {
  const examenes = [];
  return async (dispatch) => {
    await db
      .collection("examenes")
      .where("idEmpresa", "==", idEmpresa)
      //TODO: Calcular fecha a 60 días
      // .where("fechaCaducidad", "<=", now)
      .get()
      .then((snap) => {
        snap.forEach((examen) =>
          examenes.push({
            id: examen.id,
            ...examen.data(),
          })
        );
      });
    dispatch(getExamenesPorVencerPorIdEmpresa(examenes));
  };
};

export const getExamenesPorVencerPorIdEmpresa = (examenes) => ({
  type: types.getExamenesPorVencerPorIdEmpresa,
  payload: examenes,
});

export const startCrearNuevoExamen = (examen) => {
  return async (dispatch) => {
    const examenRef = db.collection("examenes");
    //agredar Datos
    examenRef
      .add(examen)
      .then((examen) => {
        console.log("Agregado: ", examen.id);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    dispatch(crearNuevoExamen(examen));
  };
};

export const crearNuevoExamen = (examen) => ({
  type: types.crearNuevoExamen,
  payload: examen,
});

export const examenesLogout = () => ({
  type: types.examenesLogout,
});
