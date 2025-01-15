import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./features/signIn/signInSlice";
import sideBarReducer from "./features/sideBar/sideBarSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
    SideBar: sideBarReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
