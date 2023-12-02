import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signInAct = createAsyncThunk("auth/signin", (data) => {
  return data;
});
export const updateProfil = createAsyncThunk("update/Profil", async (data) => {
  return data;
});
export const signOut = createAsyncThunk("auth/signout", async () => {
  return {};
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
    builder.addCase(updateProfil.fulfilled, (state, action) => {
      state.account = action.payload;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.account = {};
      state.isLogin = false;
    });
  },
});

export default authSlice.reducer;
