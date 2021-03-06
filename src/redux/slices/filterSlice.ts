import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxRootState } from "../store";
import { getQueryStringFromUrl } from "../../utils/queryString";

export interface ISort {
  field: string;
  value: string | undefined;
  typeSort: string;
}

export interface IFilterState {
  search: string;
  categoryId: number;
  sort: ISort;
}

const initialState: IFilterState = getQueryStringFromUrl();

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state: IFilterState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
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

export const selectFilter = (state: ReduxRootState) => state.filter;

export const selectCategoryId = (state: ReduxRootState) =>
  state.filter.categoryId;

export const selectSort = (state: ReduxRootState) => state.filter.sort;

export const { setSearch, setCategoryId, setSort, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
