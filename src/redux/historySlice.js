import { createSlice } from "@reduxjs/toolkit";
  
const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    addNewQuery(state, action) {
        state.push(action.payload);
    },
  },
});
  
export const { addNewQuery } = historySlice.actions;
export const historyReducer = historySlice.reducer;