import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
  name: "user",
  initialState: {
    name: ''
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = ''
    }
  }
})

export const {login, logout} = reduxSlice.actions;

export const selectName = (state) => state.name.name;

export default reduxSlice.reducer;