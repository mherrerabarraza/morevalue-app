import { types } from "../types/types"

export const equipmentReducer = (state = {}, action) => {
  switch (action.type) {
    case types.crearEquipoEmpresa:
      return {
        ...state,
        equipos: [...action.payload],
      }
    case types.getEquiposIdEmpresa:
      return {
        ...state,
        equipos: [...action.payload],
      }
    case types.getTodosLosEquipos:
      return {
        ...state,
        equipos: [...action.payload],
      }
    case types.equiposLogout:
      return {}

    default:
      return state
  }
}
