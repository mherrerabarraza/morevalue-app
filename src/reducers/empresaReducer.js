import { types } from "../types/types";

export const empresaReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getTodasLasEmpresas:
      return {
        ...state,
        empresas: action.payload,
      };
    // case types.crearNuevaEmpresa:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     ultimaCreada: action.payload,
    //   };
    default:
      return state;
  }
};
