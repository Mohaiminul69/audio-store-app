import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const { cartProduct } = payload;
      const isItemInCart = state.find((item) => item.id === cartProduct.id);
      if (isItemInCart) {
        return state.map((item) => item.id === cartProduct.id)
          ? { ...item, ...cartProduct }
          : item;
      } else {
        return [...state, { ...cartProduct }];
      }
    },
    deleteFromCart: (state, action) => {
      const { payload } = action;
      return state.filter((item) => item.id !== payload.id);
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, reset } = cartSlice.actions;

export default cartSlice.reducer;
