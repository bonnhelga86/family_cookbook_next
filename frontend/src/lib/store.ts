import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/usersSlice";
import popup from "./slices/popupSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { users, popup },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
