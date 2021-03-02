import { db } from "../firebase/firebase-config"
import { types } from "../types/types"

export const startCrearEquipoEmpresa = (
  idEmpresa,
  idContrato,
  idEquipo,
  nombre
) => {
  return async (dispatch) => {
    //crea equipo
    const nuevoEquipo = []
    await db.collection("equipos").doc(idEquipo).set({
      idEmpresa: idEmpresa,
      idContrato: idContrato,
      nombre: nombre,
    })
    nuevoEquipo.push({ idEquipo, idEmpresa, idContrato, nombre })
    dispatch(crearEquipoEmpresa(nuevoEquipo))
    //actualizar la lista de equipos de la empresa
    dispatch(startGetEquiposIdEmpresa(idEmpresa))
  }
}

export const crearEquipoEmpresa = (equipo) => ({
  type: types.crearEquipoEmpresa,
  payload: equipo,
})

export const startGetEquiposIdEmpresa = (idEmpresa) => {
  return async (dispatch) => {
    const equipos = []
    db.collection("equipos")
      .where("idEmpresa", "==", idEmpresa)
      .get()
      .then((snapEquipos) => {
        snapEquipos.forEach((equipo) => {
          equipos.push({
            id: equipo.id,
            ...equipo.data(),
          })
        })
        dispatch(getEquiposIdEmpresa(equipos))
      })
  }
}

export const getEquiposIdEmpresa = (equipos) => ({
  type: types.getEquiposIdEmpresa,
  payload: equipos,
})

export const startGetTodosLosEquipos = () => {
  return async (dispatch) => {
    const equipos = []
    db.collection("equipos")
      .get()
      .then((equiposRef) => {
        equiposRef.forEach((equipo) => {
          equipos.push({
            id: equipo.id,
            ...equipo.data(),
          })
        })
        dispatch(getTodosLosEquipos(equipos))
      })
  }
}

export const getTodosLosEquipos = (equipos) => ({
  type: types.getTodosLosEquipos,
  payload: equipos,
})
export const equiposLogout = () => ({
  type: types.equiposLogout,
  payload: null,
})
