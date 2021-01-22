import React from "react";
import { db } from "../firebase/firebase-config";

export const loadTrabajadores = async (idEmpresa) => {
  const empleados = [];
  const emplSnap = await db
    .collection("trabajadores")
    .where("idEmpresa", "==", idEmpresa)
    .get();

  emplSnap.forEach((snapHijo) => {
    console.log(snapHijo.data());
  });
  return empleados;
};
