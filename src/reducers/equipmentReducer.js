import { types } from "../types/types";

export const equipmentReducer = (state = {}, action) => {
    switch (action.type) {
        case types.crearEquipoEmpresa:
            return {
                ...state,
                equipo: action.payload
            }
        case types.getEquiposIdEmpresa:
            return {
                ...state,
                equipos: [...action.payload]
            }

        default:
            return state;
    }

}
