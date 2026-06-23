import { configureStore } from "@reduxjs/toolkit";
import { counterFactory } from "./counterFactory";

export const store = configureStore({
  reducer: {
    counter: counterFactory.reducer,
  },
});
