import { types } from "../types/types";

export const permisosReducer = (state = {}, action) => {
    switch (action.type) {
        case types.getPermisosPorVencerTodasLasEmpresas:
            return {
                ...state,
                permisos: [...action.payload],
            };
        case types.getTodoExamenesPermisosEquipoID:
            return {
                ...state,
                permisosIdEquipo: [...action.payload]
            }

        default:
            return state;
    }
};
