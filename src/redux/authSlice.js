import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signInAct = createAsyncThunk("auth/signin", (data) => {
  return data;
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    account: {},
    isLogin: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signInAct.fulfilled, (state, action) => {
      state.account = action.payload;
      state.isLogin = true;
    });
  },
});

export default authSlice.reducer;
