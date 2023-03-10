import { createSlice } from "@reduxjs/toolkit";
  
const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterOffices(state, action) {
      return action.payload;
    },
  },
});
  
export const { filterOffices } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;