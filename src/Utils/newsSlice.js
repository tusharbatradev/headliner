import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name : 'news',
    initialState : [],
    reducers : {
        addFavourites : ((state, action) => {
            state.push(action.payload);
        })
    }
});

export const { addFavourites } = newsSlice.actions;
export default newsSlice.reducer;
