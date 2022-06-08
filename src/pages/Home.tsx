import React, { useEffect, useRef } from "react";
import qs from "query-string";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/skeletons/PizzaBlockSkeleton";
import { SearchContext } from "../App";
import { sortList } from "../components/Sort";
import { IFilterState, setFilters } from "../redux/slices/filterSlice";
import { fetchFilteredPizzas } from "../redux/slices/pizzasSlice";
import { useReduxDispatch, useReduxSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isFirstMounted = useRef(false);
  const dispatch = useReduxDispatch();

  const pizzasState = useReduxSelector((state) => state.pizzas);

  const { search } = React.useContext(SearchContext);
  const { categoryId, sort } = useReduxSelector((state) => state.filter);

  useEffect(() => {
    // get params from url
    if (window.location.search && !isFirstMounted.current) {
      const params = qs.parse(window.location.search);

      const sort = sortList.filter(
        (sort) => sort.field === params.sortBy && sort.typeSort === params.order
      )[0];

      const filters: IFilterState = {
        categoryId: Number(params.category),
        sort,
      };

      dispatch(setFilters(filters));
      fetchPizzas();
      isFirstMounted.current = true;
    } else {
      fetchPizzas();
      const queryString = getQueryString();
      navigate(`?${queryString}`);
    }
  }, [categoryId, sort, search]);

  const getQueryString = () => {
    const params = {
      search: search,
      category: categoryId > 0 ? categoryId : null,
      sortBy: sort.field,
      order: sort.typeSort,
    };

    const queryString = qs.stringify(params, {
      skipNull: true,
      skipEmptyString: true,
    });

    return queryString;
  };

  const fetchPizzas = () => {
    const queryString = getQueryString();
    dispatch(fetchFilteredPizzas(queryString));
  };

  return (
    <React.Fragment>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzasState.status === "pending"
          ? [...new Array(6)].map((_, index) => (
              <PizzaBlockSkeleton key={index} />
            ))
          : pizzasState.items.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
