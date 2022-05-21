import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import PizzaBlockSkeleton from "./components/skeletons/PizzaBlockSkeleton";
// import pizzas from "./assets/pizzas.json";

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

function App() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://628706c7e9494df61b30ccdf.mockapi.io/pizzas")
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
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
        </div>
      </div>
    </div>
  );
}

export default App;
