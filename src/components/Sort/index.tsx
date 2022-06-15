import React, { useEffect, useState } from "react";
import { useTypedSelector, useTypedDispatch } from "../../hooks/hooks";
import { ISort, selectSort, setSort } from "../../redux/slices/filterSlice";
import * as s from "./styles";

export const sortList: ISort[] = [
  {
    field: "rating",
    value: "popular (ASC)",
    typeSort: "asc",
  },
  { field: "rating", value: "popular (DESC)", typeSort: "desc" },
  { field: "price", value: "price (ASC)", typeSort: "asc" },
  { field: "price", value: "price (DESC)", typeSort: "desc" },
  { field: "title", value: "alphabet (ASC)", typeSort: "asc" },
  { field: "title", value: "alphabet (DESC)", typeSort: "desc" },
];

const Sort: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const sort = useTypedSelector(selectSort);
  const dispatch = useTypedDispatch();

  const changeActiveSort = (active: ISort) => {
    dispatch(setSort(active));
    setVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event?.composedPath().includes(sortRef.current))
        setVisible(false);
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <s.Root ref={sortRef}>
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
        <s.Label>Sorting by:</s.Label>
        <s.Value onClick={() => setVisible((prevState) => !prevState)}>
          {sort.value}
        </s.Value>
      </s.Block>
      {isVisible && (
        <s.Popup>
          <s.List>
            {sortList.map((object, index: number) => (
              <s.Item
                key={index}
                onClick={() => changeActiveSort(object)}
                className={object === sort ? "active" : ""}
              >
                {object.value}
              </s.Item>
            ))}
          </s.List>
        </s.Popup>
      )}
    </s.Root>
  );
};

export default Sort;
