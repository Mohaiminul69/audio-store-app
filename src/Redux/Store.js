import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Slices/counterSlice";
import productReducer from "../Redux/Slices/productSlice";
import cartReducer from "../Redux/Slices/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
  blacklist: ["counter", "products"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
