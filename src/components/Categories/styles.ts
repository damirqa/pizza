import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;

  @media (max-width: 1000px) {
    overflow-x: scroll;
    padding-bottom: 10px;

    ::-webkit-scrollbar {
      height: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: #f9f9f9;
      border-radius: 15px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #e0e0e0;
      border-radius: 5px;
    }
  }
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
