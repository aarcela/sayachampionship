import { addData } from "../firebase/firebase";
import { types } from "../types/types";

export const createDancer = (dancerData) => {
  return async (dispatch, getState) => {
    // const dancer = getState().dancers
    console.table([dancerData]);
    addData(dancerData);
  };
};

export const listDancers = (dancersData) => {
  return async (dispatch, getState) => {
    console.log(dancersData);
    return dispatch({
      type: types.listDancer,
      payload: dancersData,
    });
  };
};
