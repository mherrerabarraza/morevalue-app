import { types } from "../types/types";

export const examReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getExamenesPorVencerPorIdEmpresa:
      return {
        ...state,
        examenes: [...action.payload],
      };

    case types.getExamsIdTrabajador:
      return {
        ...state,
        examenes: [...action.payload],
      };

    case types.crearNuevoExamen:
      return {
        ...state,
        examen: action.payload,
      };
    case types.getExamenUrl:
      return {
        ...state,
        url: action.payload,
      };

    case types.examenesLogout:
      return {};

    default:
      return state;
  }
};
