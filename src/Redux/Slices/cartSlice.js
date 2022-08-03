import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    deleteFromCart: (state, action) => {},
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, reset } = cartSlice.actions;

export default cartSlice.reducer;
