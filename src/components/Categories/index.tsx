import React from "react";
import * as s from "./styles";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks";
import {
  selectCategoryId,
  setCategoryId,
} from "../../redux/slices/filterSlice";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const categoryId = useTypedSelector(selectCategoryId);
  const dispatch = useTypedDispatch();

  return (
    <s.Root>
      <s.List>
        {categories.map((value, index) => (
          <s.Item
            key={index}
            onClick={() => dispatch(setCategoryId(index))}
            className={categoryId === index ? "active" : ""}
          >
            {value}
          </s.Item>
        ))}
      </s.List>
    </s.Root>
  );
};

export default Categories;
