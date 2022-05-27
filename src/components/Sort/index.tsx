import React, { useState } from "react";
import * as s from "./styles";

const Sort = () => {
  const [isVisible, setVisible] = useState(false);
  const [activeSort, setActiveSort] = useState(0);
  const list: string[] = ["популярности", "цене", "алфавиту"];

  const changeActiveSort = (activeId: React.SetStateAction<number>) => {
    setActiveSort(activeId);
    setVisible(false);
  };

  return (
    <s.Root>
      <s.Block>
        <s.svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </s.svg>
        <s.Label>Сортировка по:</s.Label>
        <s.Value onClick={() => setVisible((prevState) => !prevState)}>
          {list[activeSort]}
        </s.Value>
      </s.Block>
      {isVisible && (
        <s.Popup>
          <s.List>
            {list.map((value, index) => (
              <s.Item
                key={index}
                onClick={() => changeActiveSort(index)}
                className={index === activeSort ? "active" : ""}
              >
                {value}
              </s.Item>
            ))}
          </s.List>
        </s.Popup>
      )}
    </s.Root>
  );
};

export default Sort;
