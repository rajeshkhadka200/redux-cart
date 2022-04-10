import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product slice",
  initialState: [],
  reducers: {
    setProduct(state, action) {
      return action.payload;
    },
  },
});
export const { setProduct } = productSlice.actions;
export default productSlice.reducer;

//thunks

export function fetchProducts() {
  return async function fetchProductThunk(dispatch) {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProduct(data));
    } catch (err) {
      console.log(err);
    }
  };
}
