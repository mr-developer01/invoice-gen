import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../AppStrore";

// Define a type for the slice state
export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

type TClients = {
  clients: Client[] | [];
  message: boolean;
  getClientById: Client[] | null;
};

const initialState: TClients = {
  clients: [],
  message: false,
  getClientById: null,
};

export const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClients: (state, action: PayloadAction<Client[] | []>) => {
      console.log(action.payload);
      state.clients = [...action.payload];
    },
    addClient: (state, action: PayloadAction<Client>) => {
      const user = state.clients.find(
        (user) => action.payload.email === user.email
      );
      if (!user) {
        state.message = true;
        state.clients = [...state.clients, action.payload];
      }
    },

    getClient: (state, action: PayloadAction<string>) => {
      state.getClientById = state.clients.filter((client) => {
        return client.email === action.payload
      })
    },

    removeClient: (state, action: PayloadAction<string>) => {
      state.clients = state.clients.filter(
        (client) => client.id !== action.payload
      );
    },

    setMessage: (state) => {
      setTimeout(() => {
        state.message = false;
      }, 2000);
    },
  },
});

export const { addClients, addClient, getClient, removeClient, setMessage } =
  clientSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectClients = (state: RootState) => state.client.clients;
export const selectClientUpdateMsg = (state: RootState) => state.client.message;
export const selectClient = (state: RootState) => state.client.getClientById;

export default clientSlice.reducer;
