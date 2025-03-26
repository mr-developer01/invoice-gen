import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../AppStrore";

// Define a type for the slice state
type TToggles = {
  theme: "light" | "dark";
  clientModal: boolean
};

const initialState: TToggles = {
  theme: "light",
  clientModal: false
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setClientModal: (state, action: PayloadAction<boolean>) => {
      state.clientModal = action.payload
    }
  },
});

export const { setTheme, setClientModal } = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.toggle.theme;
export const selectClientModal = (state: RootState) => state.toggle.clientModal;

export default toggleSlice.reducer;
