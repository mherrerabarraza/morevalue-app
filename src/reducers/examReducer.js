import { types } from "../types/types";

export const examReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getExamsIdTrabajador:
      return {
        ...state,
        examenes: [...action.payload],
      };

    case types.getExamenesTodosTrabajadoresEmpresa:
      return {
        ...state,
        examenes: [...action.payload],
      };

    case types.examenesLogout:
      return {};

    default:
      return state;
  }
};
