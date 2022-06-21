import { addData, deleteData, editData } from "../firebase/firebase";
import { types } from "../types/types";

export const listAcademy = (academiesData) => {
  return async (dispatch, getState) => {
    return dispatch({
      type: types.listAcademy,
      payload: academiesData,
    });
  };
};

export const createAcademy = (academyData) => {
  return async (dispatch, getState) => {
    await addData(academyData, "academy");
  };
};

export const detailAcademy = (academyID) => {
  return async (dispatch, getState) => {
    dispatch({
      type: types.detailAcademy,
      payload: academyID,
    });
  };
};

export const editAcademy = (academyData, academyID) => {
  return async (dispatch, getState) => {
    editData(academyID, academyData, "academy");
    return dispatch({
      type: types.editAcademy,
      payload: { academyID: academyID, academyData: academyData },
    });
  };
};

export const deleteAcademy = (academyID) => {
  return async (dispatch) => {
    deleteData(academyID, "academy");
    return dispatch({
      type: types.removeAcademy,
      payload: academyID,
    });
  };
};
