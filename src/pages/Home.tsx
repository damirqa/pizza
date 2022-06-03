import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/skeletons/PizzaBlockSkeleton";
import { SearchContext } from "../App";
import { useReduxSelector } from "../hooks/hooks";

interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

const Home = () => {
  const { search } = React.useContext(SearchContext);

  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId, sort } = useReduxSelector((state) => state.filter);

  useEffect(() => {
    setIsLoading(true);

    let categoryQuery = categoryId ? `category=${categoryId}` : "";
    let sortByQuery = sort ? `sortBy=${sort.field}&order=${sort.typeSort}` : "";
    let searchQuery = search ? `search=${search}` : "";
    let query = `${categoryQuery}&${sortByQuery}&${searchQuery}`;
    console.log(query);

    axios
      .get("https://628706c7e9494df61b30ccdf.mockapi.io/pizzas?" + query)
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sort, search]);

  return (
    <React.Fragment>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <PizzaBlockSkeleton key={index} />
            ))
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </React.Fragment>
  );
};

export default Home;
