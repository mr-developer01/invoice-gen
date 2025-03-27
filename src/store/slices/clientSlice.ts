import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../AppStrore";


// Define a type for the slice state
type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};


const initialState: Client[] = [];

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClients: (state, action: PayloadAction<Client[]>) =>
      (state = [...action.payload]),

    addClient: (state, action: PayloadAction<Client>) => {
      const user = state.find((user) => action.payload.email === user.email);
      console.log(user);
      if (!user) {
        
        return (state = [...state, action.payload]);
      }
    },

    removeClient: (state, action: PayloadAction<string>) =>
      (state = state.filter((client) => client.id !== action.payload)),
  },
});

export const { addClients, addClient, removeClient } = clientSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectClients = (state: RootState) => state.clients;

export default clientSlice.reducer;
