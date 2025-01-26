import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import sideBarSlice from "./sideBarSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    sideBar: sideBarSlice, 
  },
});

export default appStore;
