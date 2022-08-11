// import { addData, deleteData, editData } from "../firebase/firebase";
import { types } from "../types/types";

export const listEvents = (eventsData) => {
  return async (dispatch, getState) => {
    return dispatch({
      type: types.listEvents,
      payload: eventsData,
    });
  };
};
