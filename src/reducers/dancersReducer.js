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
    case types.detailDancer:
      return {
        ...state,
        dancerID: action.payload,
      };
    case types.editDancer:
      const indexU = state.dancersData.findIndex(
        (dancer) => dancer.id === action.payload.dancerId
      );

      const helperArray = [...state.dancersData];
      helperArray[indexU] = action.payload.dancerData;
      helperArray[indexU].id = action.payload.dancerId;
      return {
        ...state,
        dancersData: helperArray,
      };
    case types.removeDancer:
      return {
        ...state,
        dancersData: state.dancersData.filter((dancer) => {
          return dancer.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default dancersReducer;
