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

enum Status {
  IDLE = "idle",
  PENDING = "pending",
  SUCCESS = "success",
  FAILED = "failed",
}

interface IPizzasState {
  items: IPizza[];
  status: Status;
}

const initialState: IPizzasState = {
  items: [],
  status: Status.IDLE,
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
      state.status = Status.PENDING;
      state.items = [];
    });

    builder.addCase(
      fetchFilteredPizzas.fulfilled,
      (state: IPizzasState, action: PayloadAction<IPizza[]>) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      }
    );

    builder.addCase(fetchFilteredPizzas.rejected, (state: IPizzasState) => {
      state.status = Status.FAILED;
      state.items = [];
    });
  },
});

export const selectPizzas = (state: ReduxRootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
