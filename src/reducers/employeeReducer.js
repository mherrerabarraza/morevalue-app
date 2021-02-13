import React from "react";
import { types } from "../types/types";

export const employeeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getTrabajadoresIdEmpresa:
      return {
        ...state,
        trabajadores: [...action.payload],
      };
    case types.getTodosTrabajadores:
      return {
        ...state,
        trabajadores: [...action.payload],
      };
    // case types.getTrabajadoresIdEmpresa:
    //   return {
    //     ...state,
    //     trabajadores: [...action.payload],
    //   };

    case types.crearTrabajadorEmpresa:
      return {
        ...state,
        creado: action.payload,
      };

    default:
      return state;
  }
};
