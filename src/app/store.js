import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import academyReducer from "../reducers/academyReducer";
import dancersReducer from "../reducers/dancersReducer";
import EventReducer from "../reducers/eventReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dancers: dancersReducer,
    academies: academyReducer,
    events: EventReducer,
  },
});
