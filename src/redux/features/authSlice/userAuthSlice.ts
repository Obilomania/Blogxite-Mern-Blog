import { createSlice } from "@reduxjs/toolkit";
import userModel from "../../../interfaces/userModel";

const fullname: string | null = JSON.parse(localStorage.getItem("name") || "null");
export const emptyUserState: any = {
  isLoggedIn: false,
  fullname: fullname ? fullname : "",
  name: "",
  id: "",
  email: "",
};


export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: emptyUserState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    User_Loggedin: (state, action) => {
      state.isLoggedIn = action.payload
    },
    User_Fullname: (state, action) => {
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
    }
  },
});


export const { setLoggedInUser, User_Loggedin, User_Fullname } = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;