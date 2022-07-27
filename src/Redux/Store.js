import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
