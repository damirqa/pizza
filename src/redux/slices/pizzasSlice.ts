import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ReduxRootState } from "../store";

export const fetchFilteredPizzas = createAsyncThunk<IPizza[], string>(
  "pizzas/fetchFiltered",
  async (queryString) => {
    const { data } = await axios.get<IPizza[]>(
      "https://628706c7e9494df61b30ccdf.mockapi.io/pizzas?" + queryString
    );
    return data;
  }
);

export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

interface IPizzasState {
  items: IPizza[];
  status: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: IPizzasState = {
  items: [],
  status: "idle",
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state: IPizzasState, action: PayloadAction<IPizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilteredPizzas.pending, (state: IPizzasState) => {
      state.status = "pending";
      state.items = [];
    });

    builder.addCase(
      fetchFilteredPizzas.fulfilled,
      (state: IPizzasState, action: PayloadAction<IPizza[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      }
    );

    builder.addCase(fetchFilteredPizzas.rejected, (state: IPizzasState) => {
      state.status = "failed";
      state.items = [];
    });
  },
});

export const selectPizzas = (state: ReduxRootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
