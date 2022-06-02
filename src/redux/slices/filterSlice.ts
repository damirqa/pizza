import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISort {
  field: string;
  value: string;
  typeSort: string;
}

interface IFilterState {
  categoryId: number;
  sort: ISort;
}

const initialState: IFilterState = {
  categoryId: 0,
  sort: {
    field: "rating",
    value: "популярности (ASC)",
    typeSort: "asc",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state: IFilterState, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state: IFilterState, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
