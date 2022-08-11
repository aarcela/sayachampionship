import { types } from "../types/types";

const initialState = {
  eventsData: [],
};

const EventReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.listEvents:
      return { ...state, eventsData: action.payload };

    default:
      return state;
  }
};

export default EventReducer;
