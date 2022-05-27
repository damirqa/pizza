import styled from "styled-components";

export const Root = styled.div``;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: darken(#f9f9f9, 2%);
  }

  &:active {
    background-color: darken(#f9f9f9, 5%);
  }

  &.active {
    background-color: #282828;
    color: #fff;
  }
`;
