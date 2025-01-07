import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Ensure axios is imported

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  console.log(response); // Corrected from "result" to "response"
  
  return response.data.products;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    loading: false,
    errorMsg: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, apiResult) => {
        state.allProducts = apiResult.payload;
        state.loading = false;
        state.errorMsg = "";
      })
      .addCase(fetchProducts.pending, (state) => {
        state.allProducts = [];
        state.loading = true;
        state.errorMsg = "";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.allProducts = [];
        state.loading = false;
        state.errorMsg = "API call failed";
      });
  },
});

export default productSlice.reducer;