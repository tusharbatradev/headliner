import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: [],
  reducers: {
    addFavourites: (state, action) => {
      state.push(action.payload);
    },
    removeFavourites: (state, action) => {
      return state.filter((news) => news.id !== action.payload.id);
    },
  },
});

export const { addFavourites, removeFavourites } = newsSlice.actions;
export default newsSlice.reducer;
