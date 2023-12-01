import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const today = moment().format("YYYY-MM-DD");
const tomorrow = moment(today).add(1, "day").format("YYYY-MM-DD");

const initialState = {
  selectedItem: "",
  checkIn: today,
  checkOut: tomorrow,
  guest: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: initialState,
  },
  reducers: {
    setSearch(state, action) {
      state.search = { ...state.search, ...action.payload };
    },
    clearSearch(state, action) {
      state.search = initialState;
    },
  },
});

export const { setSearch, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
