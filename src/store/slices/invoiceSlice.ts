import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../AppStrore";

type Service = {
  description: string;
  rate: number;
  time: string;
  currency: "$" | "₹";
};

type Payment = {
  isPaid: boolean;
  amountPaid: number;
  totalAmount: number;
  remaining: number;
};

type Invoice = {
  id?: string;
  clientId?: string;
  date?: string;
  payment?: Payment;
  services?: Service[];
};

const initialState: Invoice[] = [];

export const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    addInvoices: (state, action: PayloadAction<Invoice[]>) => {
      return state = [...action.payload];
    },
  },
});

export const { addInvoices } = invoiceSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectInvoices = (state: RootState) => state.invoices;

export default invoiceSlice.reducer;
