import { db } from "../firebase/firebase-config";

export const loadExam = async (idTrabajador) => {
  const examenes = [];
  await db
    .collection(`/trabajadores/${idTrabajador}/examenes`)
    .get()
    .then((exam) => {
      exam.forEach((snapHijo) => {
        examenes.push({
          id: snapHijo.id,
          ...snapHijo.data(),
        });
      });
    });
    console.log(examenes);
  return examenes;
};
