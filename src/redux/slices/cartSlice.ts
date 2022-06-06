import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export interface IPizza {
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
}

export interface ICartPosition {
  count: number;
  total: number;
}

export interface ICartState {
  pizzas: IPizza[];
  countPizzas: ICartPosition[];
  totalCount: number;
  totalAmount: number;
}

const initialState: ICartState = {
  pizzas: [],
  countPizzas: [],
  totalCount: 0,
  totalAmount: 0,
};

function getPizzaIndex(pizzas: IPizza[], pizza: IPizza) {
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
    addItem: (state: ICartState, action: PayloadAction<IPizza>) => {
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
    clear: (state: ICartState) => {
      state.pizzas = [];
      state.countPizzas = [];
      state.totalCount = 0;
      state.totalAmount = 0;
    },
    removePosition: (state: ICartState, action: PayloadAction<IPizza>) => {
      const id = getPizzaIndex(state.pizzas, action.payload);
      state.pizzas.splice(id, 1);
      state.totalCount -= state.countPizzas[id].count;
      state.totalAmount -= state.countPizzas[id].total;
      state.countPizzas.splice(id, 1);
    },
  },
});

export const { addItem, clear, removePosition } = cartSlice.actions;
export default cartSlice.reducer;
