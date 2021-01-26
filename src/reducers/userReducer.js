import { types } from "../types/types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.loadUserData:
      return {
        nombre: action.payload.nombre,
        idEmpresa: action.payload.idEmpresa,
        isAdmin: action.payload.isAdmin,
        idUsuario:action.payload.idUsuario
      };

    case types.userLogout:
      return {};

    default:
      return state;
  }
};
