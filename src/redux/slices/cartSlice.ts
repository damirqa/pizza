import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

interface Pizza {
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
}

interface PizzaPosition {
  count: number;
  total: number;
}

export interface ICartState {
  pizzas: Pizza[];
  countPizzas: PizzaPosition[];
  totalCount: number;
  totalAmount: number;
}

const initialState: ICartState = {
  pizzas: [],
  countPizzas: [],
  totalCount: 0,
  totalAmount: 0,
};

function getPizzaIndex(pizzas: Pizza[], pizza: Pizza) {
  let PizzaId = -1;
  pizzas.forEach((value, index) => {
    if (_.isEqual(value, pizza)) PizzaId = index;
  });
  return PizzaId;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: ICartState, action: PayloadAction<Pizza>) => {
      let PizzaId = getPizzaIndex(state.pizzas, action.payload);

      if (PizzaId === -1) {
        state.pizzas.push(action.payload);
        let id = getPizzaIndex(state.pizzas, action.payload);
        state.countPizzas[id] = { count: 1, total: action.payload.price };
        state.totalCount++;
        state.totalAmount += action.payload.price;
      } else {
        state.countPizzas[PizzaId].count += 1;
        state.countPizzas[PizzaId].total += action.payload.price;
        state.totalCount++;
        state.totalAmount += action.payload.price;
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
