import { types } from "../types/types";
export const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getTrabajadoresIdEmpresa:
      return {
        ...state,
        trabajadores: [...action.payload],
      };
    case types.trabajadoresLogout:
      return {};

    default:
      return state;
  }
};
