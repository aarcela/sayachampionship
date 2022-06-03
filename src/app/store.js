import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dancersReducer from "../reducers/dancersReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dancers: dancersReducer,
  },
});
