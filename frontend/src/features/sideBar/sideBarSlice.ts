import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SideBarState = {
  isRegisterModal: boolean;
  isEditModal: boolean;
};

const initialState: SideBarState = {
  isRegisterModal: false,
  isEditModal: false,
};

const sideBarSlice = createSlice({
  name: "switchModal",
  initialState,
  reducers: {
    switchRegisterModal: (state) => {
      state.isRegisterModal = !state.isRegisterModal;
    },
    switchEditModal: (state) => {
      state.isEditModal = !state.isEditModal;
    },
  },
});

export const { switchRegisterModal, switchEditModal } = sideBarSlice.actions;
export default sideBarSlice.reducer;
