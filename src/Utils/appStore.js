import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import sideBarSlice from "./sideBarSlice";
import newsSlice from "./newsSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    sideBar: sideBarSlice,
    news: newsSlice,
  },
});

export default appStore;
