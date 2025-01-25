import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isUserLogin: false, 
    isLoginMode: true, 
  },
  reducers: {
    loginUser: (state) => {
      state.isUserLogin = true; 
    },
    logoutUser: (state) => {
      state.isUserLogin = false; 
    },
    toggleMode: (state) => {
      state.isLoginMode = !state.isLoginMode; 
    },
  },
});

export const { loginUser, logoutUser, toggleMode } = userSlice.actions;
export default userSlice.reducer;
