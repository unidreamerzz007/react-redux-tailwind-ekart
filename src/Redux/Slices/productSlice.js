import { createSlice } from "@reduxjs/toolkit";

export const fetchProducts= createAsyncThunk("products/fetchProducts",async ()=>{
  const result=await axios.get("https://dummyjson.com/products")
  console.log(result);
  return result.data.products
  
})

const productSlice=createSlice({
  name:"products",
  initialState:{
    allProducts:[],
    loading:false,
    errorMsg:""
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,apiRseult)=>{
      state.allProducts=apiRseult.payload
      state.loading=false
      state.errorMsg=""
    })

    builder.addCase(fetchProducts.rejected,(state,apiRseult)=>{
      state.allProducts={}
      state.loading=false
      state.errorMsg="API call failed"
    })

  }
})

export default productSlice.reducer