import { configureStore } from "@reduxjs/toolkit";
import nameReducer from './reduxSlice';

export default configureStore({
  reducer: {
    name: nameReducer
  }
})