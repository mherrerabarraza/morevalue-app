import { db } from '../firebase/firebase-config'
import { types } from '../types/types'

export const startGetPermisosPorVencerIdEmpresas = (idEmpresa) => {
  var someDate = new Date()
  var numberOfDaysToAdd = 90
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
  const newDate = someDate.getTime()
  const permisos = []
  return async (dispatch) => {
    await db
      .collection('permisos')
      .where('idEmpresa', '==', idEmpresa)
      //Calcular fecha a 60 días (se creo un filtro en firestore tambien)
      .where('fechaCaducidad', '<=', newDate)
      .get()
      .then((snap) => {
        snap.forEach((permiso) =>
          permisos.push({
            id: permiso.id,
            ...permiso.data(),
          })
        )
      })
    dispatch(getPermisosPorVencerIdEmpresas(permisos))
  }
}

export const getPermisosPorVencerIdEmpresas = (permisos) => ({
  type: types.getPermisosPorVencerIdEmpresas,
  payload: permisos,
})

export const startGetPermisosPorVencerTodasLasEmpresas = () => {
  var someDate = new Date()
  var numberOfDaysToAdd = 90
  var today = someDate.getTime()
  // get documentos Vencidos desde hoy hasta 90 días
  // no antes, no después
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd)
  const newDate = someDate.getTime()
  const permisos = []
  return async (dispatch) => {
    await db
      .collection('permisos')
      .where('fechaCaducidad', '<=', newDate)
      .where('fechaCaducidad', '>=', today)
      .get()
      .then((snap) => {
        snap.forEach((permiso) => {
          permisos.push({
            id: permiso.id,
            ...permiso.data(),
          })
        })
      })
    dispatch(getPermisosPorVencerTodasLasEmpresas(permisos))
  }
}

export const getPermisosPorVencerTodasLasEmpresas = (permisos) => ({
  type: types.getPermisosPorVencerTodasLasEmpresas,
  payload: permisos,
})

export const startGetTodoPermisosEquipoID = (idEquipo) => {
  const permisos = []
  return async (dispatch) => {
    await db
      .collection('permisos')
      .where('idEquipo', '==', idEquipo)
      .get()
      .then((snap) => {
        snap.forEach((permiso) => {
          permisos.push({
            id: permiso.id,
            ...permiso.data(),
          })
        })
      })
    dispatch(getTodoPermisosEquipoID(permisos))
  }
}

export const getTodoPermisosEquipoID = (permisos) => ({
  type: types.getTodoPermisosEquipoID,
  payload: permisos,
})

export const startCrearNuevoPermiso = (permiso) => {
  const { idEquipo } = permiso
  return async (dispatch) => {
    await db
      .collection('permisos')
      .add(permiso)
      .then(
        dispatch(startGetPermisosPorVencerTodasLasEmpresas()),
        dispatch(startGetTodoPermisosEquipoID(idEquipo))
      )
      .catch((err) => {
        throw new Error(err)
      })
  }
}

export const crearNuevoPermiso = (permiso) => ({
  type: types.crearNuevoPermiso,
  payload: permiso,
})

export const permisosLogout = () => ({
  type: types.permisosLogout,
  payload: null,
})
