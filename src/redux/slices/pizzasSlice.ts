import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPizza {
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
}

interface IPizzasState {
  items: IPizza[];
}

const initialState: IPizzasState = {
  items: [],
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state: IPizzasState, action: PayloadAction<IPizza[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
