import { types } from "../types/types";

const initialState = {
  academiesData: [],
};

const academyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.listAcademy:
      return {
        ...state,
        academiesData: action.payload,
      };
    case types.detailAcademy:
      return {
        ...state,
        academyID: action.payload,
      };

    case types.editAcademy:
      const indexU = state.academiesData.findIndex(
        (academy) => academy.id === action.payload.academyID
      );

      const helperArray = [...state.academiesData];
      helperArray[indexU] = action.payload.academyData;
      helperArray[indexU].id = action.payload.academyID;
      return {
        ...state,
        academiesData: helperArray,
      };

    case types.removeAcademy:
      return {
        ...state,
        academiesData: state.academiesData.filter((academy) => {
          return academy.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default academyReducer;
