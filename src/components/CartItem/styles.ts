import styled from "styled-components";
import { ButtonCircle } from "../../styles/base";

export const CartItem = styled.div`
    display: flex;
    width: 100%
    border-top: 1px solid $gray-line;
    padding-top: 30px;
    margin-top: 30px;
`;

export const CartItemImage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const CartItemTitle = styled.h3`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
`;

export const CartItemParagraph = styled.p`
  font-size: 18px;
  color: #8d8d8d;
`;

export const CartItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;

  b {
    font-size: 22px;
  }
`;

export const CartItemButton = styled(ButtonCircle)`
  &: hover {
    path {
      fill: #fff;
    }
  }
`;

export const CartItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;

  b {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.01em;
  }
`;

export const CartItemRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;
`;

export const CartItemButtonRemove = styled(ButtonCircle)`
  border-color: #dddddd;
  background-color: #fff;

  svg {
    transform: rotate(45deg);
    width: 11.5px;
    height: 11.5px;
    position: relative;

    path {
      fill: #dddddd;
    }
  }

  &:hover,
  &:active {
    border-color: #232323;
    background-color: #232323;
  }
`;
