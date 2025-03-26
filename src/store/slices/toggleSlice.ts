import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../AppStrore";

// Define a type for the slice state
type TToggles = {
  theme: "light" | "dark";
};

const initialState: TToggles = {
  theme: "light",
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme } = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.toggle.theme;

export default toggleSlice.reducer;
