import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DATA, PRODUCT_IMAGE_MAP } from "../../Data/product-image-map";

const initialState = {
  products: [],
  status: "idle",
  errror: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://mohaiminul69.github.io/speaker-json/speakers.json"
    );
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      const { payload } = action;
      payload.products.forEach((product) => {
        product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
        product.images = PRODUCT_IMAGE_MAP[product.name].images;
      });

      state.status = "success";
      state.products = payload.products;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectStatus = (state) => state.products.status;
export const selectFeaturedProducts = (state) =>
  state.products.products.filter((item) => item.is_featured);

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
