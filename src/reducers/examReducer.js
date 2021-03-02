import { types } from "../types/types"

export const examReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getExamenesPorVencerPorIdEmpresa:
      return {
        ...state,
        examenes: [...action.payload],
      }
    // case types.getTodoExamenesTrabajadorID:
    //   return {
    //     ...state,
    //     examenesTrabajador: [...action.payload],
    //   }

    case types.getExamenesPorVencerTodasLasEmpresas:
      return {
        ...state,
        examenes: [...action.payload],
      }

    case types.removeExamenUrl:
      return {
        ...state,
        url: null,
      }

    case types.crearNuevoExamen:
      return {
        ...state,
        examenes: [...action.payload],
      }
    case types.getExamenUrl:
      return {
        ...state,
        url: action.payload,
      }

    case types.examenesLogout:
      return {}

    default:
      return state
  }
}
