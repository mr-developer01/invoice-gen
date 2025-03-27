import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../AppStrore";

// Define a type for the slice state
type TToggles = {
  theme: "light" | "dark";
  clientModal: boolean;
  snack: boolean;
  snackMsg: string,
};

const initialState: TToggles = {
  theme: "light",
  clientModal: false,
  snack: true,
  snackMsg: "Default",
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setClientModal: (state, action: PayloadAction<boolean>) => {
      state.clientModal = action.payload;
    },
    setSnack: (state, action: PayloadAction<boolean>) => {
      state.snack = action.payload;
    },
    setSnackMsg: (state, action: PayloadAction<string>) => {
      state.snackMsg = action.payload;
    },
  },
});

export const { setTheme, setClientModal, setSnack, setSnackMsg } = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.toggle.theme;
export const selectClientModal = (state: RootState) => state.toggle.clientModal;
export const selectSnack = (state: RootState) => state.toggle.snack;
export const selectSnackMsg = (state: RootState) => state.toggle.snackMsg;

export default toggleSlice.reducer;
