import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";

const store = configureStore({
  reducer: {
    cart_: cartSlice,
    // product: productSlice,
  },
});

export default store;
