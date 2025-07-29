import { configureStore } from "@reduxjs/toolkit";
import contactCsSlice from "./features/contactCsSlice";

// Create and configure the store
export const makeStore = () => {
  return configureStore({
    reducer: {
      contactCs: contactCsSlice,
    },
  });
};

// Create a store instance
export const store = makeStore();
