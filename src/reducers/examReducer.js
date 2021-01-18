import { types } from "../types/types";

export const examReducer = (state = {}, action) => {
  switch (action.types) {
    case types.getExamsIdTrabajador:
      console.log(action.payload);
      return {
        ...state,
        examenes: [...action.payload],
      };

    default:
      return state;
  }
};
