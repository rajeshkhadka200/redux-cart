import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product slice",
  data: [],
  reducers: {
    async get_product() {
      //   console.log(state);
      const product = await fetch("https://fakestoreapi.com/products");
      const parsed = await product.json();
    },
  },
});

export const { get_product } = productSlice.actions;
export default get_product.reducer;
