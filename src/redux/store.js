import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import loadingReducer from "./loadingSlice";
import authReducer from "./authSlice";
import favoriteReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    toggle: loadingReducer,
    auth: authReducer,
    favorite: favoriteReducer,
  },
});

export default store;
