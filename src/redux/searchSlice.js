import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    selectedItem: null,
    checkIn: moment().format("YYYY-MM-DD"),
    checkOut: moment().add(1, "day").format("YYYY-MM-DD"),
    guest: 1,
  },
  reducers: {
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
    setCheckIn(state, action) {
      state.checkIn = moment(action.payload).format("YYYY-MM-DD");
    },
    setCheckOut(state, action) {
      state.checkOut = moment(action.payload).format("YYYY-MM-DD");
    },
    guestIncrement(state) {
      if (state.guest < 7) {
        state.guest += 1;
      }
    },
    guestDecrement(state) {
      if (state.guest > 1) {
        state.guest -= 1;
      }
    },
    searchPressed(state) {
      if (
        state.selectedItem !== null &&
        state.checkIn !== null &&
        state.checkOut !== null &&
        state.guest !== null
      ) {
        console.log("Berhasil Melakukan Pencarian!");
      } else {
        console.log("Tidak ada yang boleh kosong");
      }
    },
  },
});

export const {
  setSelectedItem,
  setCheckIn,
  setCheckOut,
  guestIncrement,
  guestDecrement,
  searchPressed,
} = searchSlice.actions;
export default searchSlice.reducer;
