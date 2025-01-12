import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./features/signIn/signInSlice";

export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
