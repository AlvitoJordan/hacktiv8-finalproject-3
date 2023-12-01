import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const bookingHotel = createAsyncThunk("book/hotel", (data) => {
  return data;
});

const bookedSlice = createSlice({
  name: "bookedSlice",
  initialState: {
    booked: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookingHotel.fulfilled, (state, action) => {
      state.booked.push(action.payload);
    });
  },
});

export default bookedSlice.reducer;
