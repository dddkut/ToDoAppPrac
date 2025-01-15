import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SideBarState = {
  isRegisterModal: boolean;
};

const initialState: SideBarState = {
  isRegisterModal: false,
};

const sideBarSlice = createSlice({
  name: "swtchModal",
  initialState,
  reducers: {
    switchRegisterModal: (state) => {
      state.isRegisterModal = !state.isRegisterModal;
    },
  },
});

export const { switchRegisterModal } = sideBarSlice.actions;
export default sideBarSlice.reducer;
