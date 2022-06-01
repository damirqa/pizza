import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/skeletons/PizzaBlockSkeleton";

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

interface ISort {
  field: string;
  value: string;
  typeSort: string;
}

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState<ISort>({
    field: "rating",
    value: "популярности (ASC)",
    typeSort: "asc",
  });

  useEffect(() => {
    setIsLoading(true);

    let categoryQuery = category ? `category=${category}` : "";
    let sortByQuery = sort ? `sortBy=${sort.field}&order=${sort.typeSort}` : "";
    let query = `${categoryQuery}&${sortByQuery}`;

    fetch("https://628706c7e9494df61b30ccdf.mockapi.io/pizzas?" + query)
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
  }, [category, sort]);

  return (
    <React.Fragment>
      <div className="content__top">
        <Categories category={category} onClickCategory={setCategory} />
        <Sort sort={sort} onChangeSort={setSort} />
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
