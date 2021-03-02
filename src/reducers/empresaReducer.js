import { types } from "../types/types"

export const empresaReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getTodasLasEmpresas:
      return {
        ...state,
        empresas: action.payload,
      }
    case types.empresasLogout:
      return {}
    default:
      return state
  }
}
