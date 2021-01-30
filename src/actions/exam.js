import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types";



/**
 * TODO: Falta crear getExamenesPorIdTrabajador para mostrar en resumen trabajador
 */


 export const startGetTodoExamenesTrabajadorID = (idTrabajador) => {
  const examenes = [];
  return async (dispatch) => {
    await db
      .collection("examenes")
      .where("idTrabajador", "==", idTrabajador)
      .get()
      .then((snap) => {
        snap.forEach((examen) => {
          examenes.push({
            id: examen.id,
            ...examen.data(),
          })
        }
        );
      });
    dispatch(getTodoExamenesTrabajadorID(examenes));
  };
 }

export const getTodoExamenesTrabajadorID = (examenes) =>({
  type: types.getTodoExamenesTrabajadorID,
  payload: examenes,
})

export const startGetExamenesPorVencerTodasLasEmpresas = () => {
  var someDate = new Date();
  var numberOfDaysToAdd = 60;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  const newDate = someDate.getTime();
  const examenes = [];
  return async (dispatch) => {
    await db
      .collection("examenes")
      .where("fechaCaducidad", "<=", newDate)
      .get()
      .then((snap) => {
        snap.forEach((examen) => {
          examenes.push({
            id: examen.id,
            ...examen.data(),
          })
        }
        );
      });
    dispatch(getExamenesPorVencerTodasLasEmpresas(examenes));
  };
}

export const getExamenesPorVencerTodasLasEmpresas = (examenes) => ({
  type: types.getExamenesPorVencerTodasLasEmpresas,
  payload: examenes,
});


export const startGetExamenesPorVencerPorIdEmpresa = (idEmpresa) => {
  var someDate = new Date();
  var numberOfDaysToAdd = 60;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  const newDate = someDate.getTime();
  const examenes = [];
  return async (dispatch) => {
    await db
      .collection("examenes")
      .where("idEmpresa", "==", idEmpresa)
      //Calcular fecha a 60 días (se creo un filtro en firestore tambien)
      .where("fechaCaducidad", "<=", newDate)
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

export const startUploadingExamen = (examenFile) => {
  return async (dispatch) => {
    const fileUrl = await fileUpload(examenFile);
    dispatch(uploadingExamen(fileUrl));
  };
};

export const uploadingExamen = (fileUrl) => ({
  type: types.getExamenUrl,
  payload: fileUrl,
});


export const examenesLogout = () => ({
  type: types.examenesLogout,
});

export const startLogDescargas = (
  idUsuario,
  idEmpresa,
  idTrabajador,
  nombreExamen,
  url
) => {
  return async () => {
    await db
      .collection(`registro/${idUsuario}/log`)
      .add(
        {
          fechaDescarga: new Date().toLocaleDateString(),
          id: idUsuario,
          idEmpresa: idEmpresa,
          idTrabajador: idTrabajador,
          archivoDescargado: nombreExamen,
          url: url,
        },
        { merge: true }
      )
      .then((ok) => {
        console.log("Registro Ingresado: ", ok);
      })
      .catch((err) => {
        console.log("Algo salió mal: ", err);
      });
  };
};

