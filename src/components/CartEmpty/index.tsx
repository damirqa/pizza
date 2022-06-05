import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styles";
import emptyCart from "../../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <s.Root>
      <s.Title>
        Корзина пустая <span>😕</span>
      </s.Title>
      <s.Paragraph>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </s.Paragraph>
      <s.EmptyCartImage src={emptyCart} alt="Empty cart" />
      <Link to={"/"}>
        <s.ButtonBack>Вернуться назад</s.ButtonBack>
      </Link>
    </s.Root>
  );
};

export default CartEmpty;
