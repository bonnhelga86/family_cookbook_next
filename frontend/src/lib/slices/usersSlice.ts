// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface IUserState {
  isLogin: boolean;
}

// Define the initial state using that type
const initialState: IUserState = {
  isLogin: false,
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
    logOut: (state) => {
      state.isLogin = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // logOut: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { logIn, logOut } = usersSlice.actions;

export const isLogin = (state: RootState) => state.users.isLogin;

export default usersSlice.reducer;
