import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { addItem, IPizza } from "../../redux/slices/cartSlice";
import { useReduxDispatch } from "../../hooks/hooks";

interface IPizzaBlockProps {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

const PizzaBlock = ({
  title,
  price,
  imageUrl,
  sizes,
  types,
}: IPizzaBlockProps) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typesPizza = ["тонкое", "традиционное"];

  const dispatch = useReduxDispatch();

  useEffect(() => {
    setActiveType(types[0]);
  }, [types]);

  const onClickAddButton = () => {
    setPizzaCount((prevState) => prevState + 1);
    const pizza: IPizza = {
      title,
      price,
      imageUrl,
      type: typesPizza[activeType],
      size: sizes[activeSize],
    };

    dispatch(addItem(pizza));
  };

  return (
    <s.Root>
      <s.PizzaImage src={imageUrl} alt={title} />
      <s.Title>{title}</s.Title>
      <s.Selector>
        <s.FirstList>
          {types.map((type) => (
            <s.Item
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
              key={type}
            >
              {typesPizza[type]}
            </s.Item>
          ))}
        </s.FirstList>
        <s.List>
          {sizes.map((value, index) => (
            <s.Item
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? "active" : ""}
              key={index}
            >
              {value} см.
            </s.Item>
          ))}
        </s.List>
      </s.Selector>
      <s.Bottom>
        <s.Price>от {price} ₽</s.Price>
        <s.ButtonAdd outline onClick={() => onClickAddButton()}>
          <s.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <s.path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
          </s.svg>
          <s.ButtonLabel> Добавить</s.ButtonLabel>
          {pizzaCount > 0 && <s.Counter>{pizzaCount}</s.Counter>}
        </s.ButtonAdd>
      </s.Bottom>
    </s.Root>
  );
};

export default PizzaBlock;
