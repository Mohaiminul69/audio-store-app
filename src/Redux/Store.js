import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Slices/counterSlice";
import productReducer from "../Redux/Slices/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});
