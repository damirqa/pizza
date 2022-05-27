import React, { useState } from "react";
import * as s from "./styles";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <s.Root className="categories">
      <s.List>
        {categories.map((value, index) => (
          <s.Item
            key={index}
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? "active" : ""}
          >
            {value}
          </s.Item>
        ))}
      </s.List>
    </s.Root>
  );
};

export default Categories;
