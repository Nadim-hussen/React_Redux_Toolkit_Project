import { configureStore } from "@reduxjs/toolkit";
import Fetch from "./features/Fetch";
import postSlice from "./features/Posts";

const store = configureStore({
  reducer: {
    postSlice: postSlice,
    fetches: Fetch
  },
});

export default store;