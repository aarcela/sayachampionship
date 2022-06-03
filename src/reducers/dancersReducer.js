import { types } from "../types/types";

const initialState = {
  dancersData: [],
};

const dancersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addDancer:
      return {};

    case types.listDancer:
      return {
        ...state,
        dancersData: action.payload,
      };

    default:
      return state;
  }
};

export default dancersReducer;
