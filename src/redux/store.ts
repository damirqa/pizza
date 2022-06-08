import { configureStore } from "@reduxjs/toolkit";
import filter from "../redux/slices/filterSlice";
import cart from "../redux/slices/cartSlice";
import pizzas from "../redux/slices/pizzasSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});

export type ReduxRootState = ReturnType<typeof store.getState>;

export type ReduxDispatch = typeof store.dispatch;
