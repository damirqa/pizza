import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/skeletons/PizzaBlockSkeleton";
import { selectFilter } from "../redux/slices/filterSlice";
import { fetchFilteredPizzas, selectPizzas } from "../redux/slices/pizzasSlice";
import { useTypedDispatch, useTypedSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { DEFAULT_FILTERS, getQueryStringFromStore } from "../utils/queryString";
import _ from "lodash";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const filters = useTypedSelector(selectFilter);
  const pizzasState = useTypedSelector(selectPizzas);

  //navigate and dispatch in deps array because eslint wants it - no rerender
  // remove if this call rerender and set comment with text eslint disable next line
  useEffect(() => {
    const fetchPizzas = () => {
      dispatch(fetchFilteredPizzas(getQueryStringFromStore(filters)));
    };

    if (!_.isEqual(DEFAULT_FILTERS, filters)) {
      const queryString = getQueryStringFromStore(filters);
      navigate(`?${queryString}`);
    }

    fetchPizzas();
  }, [filters, navigate, dispatch]);

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
