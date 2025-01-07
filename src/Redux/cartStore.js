import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice, // Fixed typo: changed "producReducer" to "productReducer"
  },
});

export default cartStore;