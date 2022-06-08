import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { IPizzaBlock } from "../../components/PizzaBlock";

export interface ICartPosition {
  count: number;
  total: number;
}

export interface ICartState {
  pizzas: IPizzaBlock[];
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

function getPizzaIndex(pizzas: IPizzaBlock[], pizza: IPizzaBlock) {
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
    addItem: (state: ICartState, action: PayloadAction<IPizzaBlock>) => {
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
    removePosition: (state: ICartState, action: PayloadAction<IPizzaBlock>) => {
      const id = getPizzaIndex(state.pizzas, action.payload);
      state.pizzas.splice(id, 1);
      state.totalCount -= state.countPizzas[id].count;
      state.totalAmount -= state.countPizzas[id].total;
      state.countPizzas.splice(id, 1);
    },
    addOne: (state: ICartState, action: PayloadAction<IPizzaBlock>) => {
      const id = getPizzaIndex(state.pizzas, action.payload);
      state.countPizzas[id].count += 1;
      state.countPizzas[id].total += action.payload.price;
      state.totalCount += 1;
      state.totalAmount += action.payload.price;
    },
    removeOne: (state: ICartState, action: PayloadAction<IPizzaBlock>) => {
      const id = getPizzaIndex(state.pizzas, action.payload);
      state.countPizzas[id].count -= 1;
      state.countPizzas[id].total -= action.payload.price;
      state.totalCount -= 1;
      state.totalAmount -= action.payload.price;

      if (state.countPizzas[id].total === 0) {
        state.pizzas.splice(id, 1);
        state.countPizzas.splice(id, 1);
      }
    },
  },
});

export const { addItem, clear, removePosition, addOne, removeOne } =
  cartSlice.actions;
export default cartSlice.reducer;
