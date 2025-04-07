import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../AppStrore";

// Define a type for the slice state
type TToggles = {
  theme: "light" | "dark";
  clientModal: boolean;
  snack: boolean;
  snackMsg: string;
  invoice: boolean;
  pdfModal: boolean;
  removeClient: boolean;
};

const initialState: TToggles = {
  theme: "light",
  clientModal: false,
  snack: false,
  snackMsg: "Default",
  invoice: false,
  pdfModal: false,
  removeClient: false,
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
    setPdfModal: (state, action: PayloadAction<boolean>) => {
      state.pdfModal = action.payload;
    },
    setRemoveClientModal: (state, action: PayloadAction<boolean>) => {
      state.removeClient = action.payload;
    },
    setSnack: (state, action: PayloadAction<boolean>) => {
      state.snack = action.payload;
    },
    setSnackMsg: (state, action: PayloadAction<string>) => {
      state.snackMsg = action.payload;
    },
    setInvoice: (state, action: PayloadAction<boolean>) => {
      state.invoice = action.payload;
    },
  },
});

export const {
  setTheme,
  setClientModal,
  setSnack,
  setSnackMsg,
  setInvoice,
  setPdfModal,
  setRemoveClientModal
} = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.toggle.theme;
export const selectClientModal = (state: RootState) => state.toggle.clientModal;
export const selectPdfModal = (state: RootState) => state.toggle.pdfModal;
export const selectRemoveClientModal = (state: RootState) => state.toggle.removeClient;
export const selectSnack = (state: RootState) => state.toggle.snack;
export const selectSnackMsg = (state: RootState) => state.toggle.snackMsg;
export const selectInvoice = (state: RootState) => state.toggle.invoice;

export default toggleSlice.reducer;
