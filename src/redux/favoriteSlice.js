import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk("add/favorite", (data) => {
  return data;
});
export const unFavorite = createAsyncThunk("un/favorite", (data) => {
  return data;
});
const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState: {
    favorites: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.favorites.push(action.payload);
    });
    builder.addCase(unFavorite.fulfilled, (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    });
  },
});

export default favoriteSlice.reducer;
