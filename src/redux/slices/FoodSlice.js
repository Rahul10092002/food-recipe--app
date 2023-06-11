import { createSlice } from "@reduxjs/toolkit";
// export const fetchdata = createAsyncThunk("productfetch", async () => {
//   const response = await fetch("https://api.escuelajs.co/api/v1/products");
//   const data = await response.json();
//   return data;
// });
const FoodSlice = createSlice({
  name: "FoodSlice",
  initialState: {
    recipes: [],
    // status: "idle", // idle, loading, success, failed
    // error: null,
  },
//   extraReducers: function (builder) {
//     builder
//       .addCase(fetchdata.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(fetchdata.fulfilled, (state, action) => {
//         state.status = "success";
//       })
//       .addCase(fetchdata.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
  reducers: {
    loadproducts: (state, action) => {
      state.recipes = action.payload;
    },
    updateProductOnSearch: (state, action) => {
      
      state.recipes = action.payload;
    }
  },
});

export const { loadproducts,updateProductOnSearch } = FoodSlice.actions;
export default FoodSlice.reducer;
