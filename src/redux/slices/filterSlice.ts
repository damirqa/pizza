import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISort {
  field: string;
  value: string | undefined;
  typeSort: string;
}

export interface IFilterState {
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
    setFilters: (state: IFilterState, action: PayloadAction<IFilterState>) => {
      if (Object.keys(action).length) {
        state.categoryId = action.payload.categoryId;
        state.sort = action.payload.sort;
      } else {
        state = initialState;
      }
    },
  },
});

export const { setCategoryId, setSort, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
