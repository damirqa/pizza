import styled from "styled-components";
import { Button, ButtonAdd, ButtonCircle } from "../../styles/base";

export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 32px;
`;

export const TitleSvg = styled.svg`
  position: relative;
  top: -2px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const TitleSvgPath = styled.path`
  stroke: #232323;
  stroke-width: 1.9;
`;

export const ClearCartButtonLabel = styled.span`
  display: inline-block;
  margin-left: 7px;
  color: #b6b6b6;
  font-size: 18px;
  transition: all 0.15s ease-in-out;
`;

export const ClearCartSvg = styled.svg`
  transition: all 0.15s ease-in-out;
`;

export const ClearCartPath = styled.path`
  transition: all 0.15s ease-in-out;
`;

export const ClearCartButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${ClearCartPath} {
      stroke: #373737;
    }

    ${ClearCartButtonLabel} {
      color: #373737;
    }
  }
`;

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

export const CartBottom = styled.div`
  margin: 50px 0;
`;

export const CartBottomDetails = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 22px;

    &:last-of-type {
      b {
        color: #fe5f1e;
      }
    }
  }
`;

export const CartBottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ButtonGoBack = styled(ButtonAdd)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  padding: 16px;
  border-color: #ddd;
  font-size: 16px;

  span {
    color: #c3c3c3;
    font-weight: 600;
  }

  svg {
    margin-right: 12px;
    path {
      fill: transparent;
      stroke-width: 2;
    }
  }

  &:hover {
    background-color: #111;
    border-color: #111;

    span {
      color: #fff;
    }
  }
`;

export const ButtonPay = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  width: 210px;
  padding: 16px;
  span {
    color: #fff;
  }

  &:hover {
    background-color: #f24701;
    border-color: #f24701;
  }
`;
