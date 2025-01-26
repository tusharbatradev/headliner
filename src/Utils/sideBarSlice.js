import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    sideBarOpen: false, // Default value
  },
  reducers: {
    openSideBar: (state) => {
      state.sideBarOpen = true;
    },
    closeSideBar: (state) => {
      state.sideBarOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
