import { configureStore } from "@reduxjs/toolkit";
import filter from "../redux/slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter,
  },
});

export type ReduxRootState = ReturnType<typeof store.getState>;

export type ReduxDispatch = typeof store.dispatch;
