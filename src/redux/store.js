import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import loadingReducer from "./loadingSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    toggle: loadingReducer,
    auth: authReducer,
  },
});

export default store;
