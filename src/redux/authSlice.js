import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signInAct = createAsyncThunk("auth/signin", (data) => {
  return data;
});
export const updateProfil = createAsyncThunk("update/Profil",   
async (data) => {
  return data;
  }
);

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
  },
});

export default authSlice.reducer;
