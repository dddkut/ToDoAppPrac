import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SignInState = {
  isSignedIn: boolean;
  token: string;
};

const initialState: SignInState = {
  isSignedIn: false,
  token: "",
};

const signInSlice = createSlice({
  name: "handleSignedIn",
  initialState,
  reducers: {
    handleSignedIn: (state, action: PayloadAction<string>) => {
      state.isSignedIn = !state.isSignedIn;
      state.token = action.payload;
    },
  },
});

export const { handleSignedIn } = signInSlice.actions;
export default signInSlice.reducer;
