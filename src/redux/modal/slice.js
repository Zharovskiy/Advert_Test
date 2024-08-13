import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    camper: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    modalState(state, action) {
      state.modal.camper = action.payload;
    },
  },
});

export const { modalState } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
