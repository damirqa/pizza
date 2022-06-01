import React, { Dispatch, SetStateAction } from "react";
import * as s from "./styles";

interface ICategoriesProps {
  category: number;
  onClickCategory: Dispatch<SetStateAction<number>>;
}

const Categories = ({ category, onClickCategory }: ICategoriesProps) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <s.Root>
      <s.List>
        {categories.map((value, index) => (
          <s.Item
            key={index}
            onClick={() => onClickCategory(index)}
            className={category === index ? "active" : ""}
          >
            {value}
          </s.Item>
        ))}
      </s.List>
    </s.Root>
  );
};

export default Categories;
