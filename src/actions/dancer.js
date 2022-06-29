import { addData, deleteData, editData } from "../firebase/firebase";
import { types } from "../types/types";

export const createDancer = (dancerData) => {
  return async (dispatch, getState) => {
    // const dancer = getState().dancers
    // console.table([getState]);

    addData(dancerData, "dancers");
  };
};
export const editDancer = (dancerData, dancerId) => {
  return async (dispatch, getState) => {
    editData(dancerId, dancerData, "dancers");
    return dispatch({
      type: types.editDancer,
      payload: { dancerId: dancerId, dancerData: dancerData },
    });
  };
};

export const listDancers = (dancersData) => {
  return async (dispatch, getState) => {
    return dispatch({
      type: types.listDancer,
      payload: dancersData,
    });
  };
};
export const detailDancer = (uid) => {
  return async (dispatch, getState) => {
    return dispatch({
      type: types.detailDancer,
      payload: uid,
    });
  };
};
export const deleteDancer = (uid) => {
  return async (dispatch, getState) => {
    deleteData(uid, "dancers");
    return dispatch({
      type: types.removeDancer,
      payload: uid,
    });
  };
};
