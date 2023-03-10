import { createSlice } from "@reduxjs/toolkit";
  
const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    addNewQuery(state, action) {
        console.log(state);
        console.log(action.payload);
        state.unshift(action.payload);
    },
  },
});
  
export const { addNewQuery } = historySlice.actions;
export const historyReducer = historySlice.reducer;