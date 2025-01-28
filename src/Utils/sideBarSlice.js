import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    sideBarOpen: false,
    homeRoute: true,
    searchRoute: false,
    aboutRoute: false,
    favoriteRoute: false
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
      state.favoriteRoute = false
    },
    setSearchRoute: (state) => {
      state.homeRoute = false;
      state.searchRoute = true;
      state.aboutRoute = false;
      state.favoriteRoute = false
    },
    setAboutRoute: (state) => {
      state.homeRoute = false;
      state.searchRoute = false;
      state.aboutRoute = true;
      state.favoriteRoute = false
    },
    setFavouriteRoute: (state) => {
      state.homeRoute = false;
      state.searchRoute = false;
      state.aboutRoute = false;
      state.favoriteRoute = true
    }
  },
});

export const {
  openSideBar,
  closeSideBar,
  setHomeRoute,
  setSearchRoute,
  setAboutRoute,
  setFavouriteRoute
} = sideBarSlice.actions;
export default sideBarSlice.reducer;
