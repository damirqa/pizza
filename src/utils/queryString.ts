import qs from "query-string";
import { sortList } from "../components/Sort";
import { IFilterState, ISort } from "../redux/slices/filterSlice";

export const DEFAULT_FILTERS: IFilterState = {
  search: "",
  categoryId: 0,
  sort: {
    field: "rating",
    value: "popular (ASC)",
    typeSort: "asc",
  },
};

export const getQueryStringFromUrl = (): IFilterState => {
  let filters = DEFAULT_FILTERS;

  if (window.location.search) {
    const params = qs.parse(window.location.search);

    const sort: ISort = sortList.filter(
      (sort) => sort.field === params.sortBy && sort.typeSort === params.order
    )[0];

    filters = {
      search: "",
      categoryId: Number(params.category),
      sort,
    };
  }
  return filters;
};

export const getQueryStringFromStore = (filters: IFilterState) => {
  const params = {
    search: filters.search,
    category: filters.categoryId > 0 ? filters.categoryId : null,
    sortBy: filters.sort.field,
    order: filters.sort.typeSort,
  };

  return qs.stringify(params, {
    skipNull: true,
    skipEmptyString: true,
  });
};
