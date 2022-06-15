import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/Posts";

const store = configureStore({
  reducer: {
    postSlice: postSlice,
  },
});

export default store;