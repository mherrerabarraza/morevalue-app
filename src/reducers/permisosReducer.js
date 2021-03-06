import { types } from "../types/types"

export const permisosReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getPermisosPorVencerTodasLasEmpresas:
      return {
        ...state,
        permisos: [...action.payload],
      }
    case types.getTodoPermisosEquipoID:
      return {
        ...state,
        permisosEquipos: [...action.payload],
      }
    case types.getPermisosPorVencerIdEmpresas:
      return {
        ...state,
        permisos: [...action.payload],
      }
    case types.permisosLogout:
      return {}

    default:
      return state
  }
}
