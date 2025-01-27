import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    sideBarOpen: false,
    homeRoute: true,
    searchRoute: false,
    aboutRoute: false,
  },
  reducers: {
    openSideBar: (state) => {
      state.sideBarOpen = true;
    },
    closeSideBar: (state) => {
      state.sideBarOpen = false;
    },
    setHomeRoute: (state) => {
      state.homeRoute = true;
      state.searchRoute = false;
      state.aboutRoute = false;
    },
    setSearchRoute: (state) => {
      state.homeRoute = false;
      state.searchRoute = true;
      state.aboutRoute = false;
    },
    setAboutRoute: (state) => {
      state.homeRoute = false;
      state.searchRoute = false;
      state.aboutRoute = true;
    },
  },
});

export const {
  openSideBar,
  closeSideBar,
  setHomeRoute,
  setSearchRoute,
  setAboutRoute,
} = sideBarSlice.actions;
export default sideBarSlice.reducer;
