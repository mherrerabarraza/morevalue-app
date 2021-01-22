import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startGetExamenesTodosTrabajadoresEmpresa = (idEmpresa) => {
  return async (dispatch) => {
    // const examenesArray = [];
    const resumenEntry = [];
    db.collection("trabajadores")
      .where("idEmpresa", "==", idEmpresa)
      .get()
      .then((snapTrabajadores) => {
        snapTrabajadores.forEach((snapTrabajador) => {
          db.collection(`/trabajadores/${snapTrabajador.id}/examenes`)
            .get()
            .then((snapExamenes) => {
              resumenEntry.push({
                id: snapTrabajador.id,
                ...snapTrabajador.data(),
                examenes: [],
              });
              snapExamenes.forEach((examen) => {
                // examenesArray.push({
                //   id: examen.id,
                //   ...examen.data(),
                // });

                resumenEntry.forEach((el) => {
                  if (el.id === snapTrabajador.id) {
                    el.examenes.push({ id: examen.id, ...examen.data() });
                  }
                });
              });
              //ojo donde va el dispatch
              // dispatch(getExamenesTodosTrabajadoresEmpresa(examenesArray));
              dispatch(getExamenesTodosTrabajadoresEmpresa(resumenEntry));
            })
            .catch((e1) => {
              console.log(e1);
            });
        });
      })
      .catch((e2) => {
        console.log(e2);
      });
  };
};

export const getExamenesTodosTrabajadoresEmpresa = (examenes) => ({
  type: types.getExamenesTodosTrabajadoresEmpresa,
  payload: examenes,
});

// export const startGetExamsIdTrabajador = (idTrabajador) => {
//   return async (dispatch) => {
//     const examenesArray = [];
//     await db
//       .collection(`/trabajadores/${idTrabajador}/examenes`)
//       .get()
//       .then((examenes) => {
//         examenes.forEach((examen) => {
//           examenesArray.push({
//             id: examen.id,
//             ...examen.data(),
//           });
//         });
//         dispatch(getExamsIdTrabajador(examenesArray));
//       });
//   };
// };

// export const getExamsIdTrabajador = (examenes) => ({
//   type: types.getExamsIdTrabajador,
//   payload: examenes,
// });

export const examenesLogout = () => ({
  type: types.examenesLogout,
});
