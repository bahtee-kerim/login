import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
  name: "user",
  initialState: {
    name: ''
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
    }
  }
})

export const {login} = reduxSlice.actions;

export const selectName = (state) => state.name.name;

export default reduxSlice.reducer;