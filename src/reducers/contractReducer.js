import { types } from "../types/types"

export const contractReducer = (state = {}, action) => {
  switch (action.type) {
    case types.crearNuevoContrato:
      return {
        ...state,
        creado: action.payload,
      }

    case types.getContratosIdEmpresa:
      return {
        ...state,
        contratos: [...action.payload],
      }
    case types.getTodosContratos:
      return {
        ...state,
        contratos: [...action.payload],
      }
    default:
      return state
  }
}
