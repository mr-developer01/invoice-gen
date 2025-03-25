import { configureStore } from "@reduxjs/toolkit";
import ClientReducers from "./slices/clientSlice"
import InvoiceReducer from "./slices/invoiceSlice"
// ...

export const store = configureStore({
  reducer: {
    clients: ClientReducers,
    invoices: InvoiceReducer
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
