import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: carSlice,
  },
});

export default store;
