import React from "react";
import { Link } from "react-router-dom";
import * as s from "./styles";
import emptyCart from "../../assets/img/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <s.Root>
      <s.Title>
        Empty Cart <span>😕</span>
      </s.Title>
      <s.Paragraph>
        Most likely, you haven't ordered pizza yet.
        <br />
        To order a pizza, go to the main page.
      </s.Paragraph>
      <s.EmptyCartImage src={emptyCart} alt="Empty cart" />
      <Link to={"/"}>
        <s.ButtonBack>Go Back</s.ButtonBack>
      </Link>
    </s.Root>
  );
};

export default CartEmpty;
