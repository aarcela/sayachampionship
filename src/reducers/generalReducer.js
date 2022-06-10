import { types } from "../types/types";

const initialState = {
  isLoading: false,
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loading:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default generalReducer;
