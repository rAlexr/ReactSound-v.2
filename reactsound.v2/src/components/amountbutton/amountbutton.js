import { useState } from "react";

import {
  AmountContainer,
  AmountInDecContainer,
  Decrement,
  DisplayAmount,
  Increment,
  CartBtn,
} from "./amountbutton.styled";

const AmountButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDncrement = () => setCount(count - 1);

  return (
    <AmountContainer>
      <AmountInDecContainer>
        <Increment onClick={handleIncrement}>+</Increment>
        <DisplayAmount>{count}</DisplayAmount>
        <Decrement onClick={handleDncrement}>-</Decrement>
      </AmountInDecContainer>
      <CartBtn>add to cart</CartBtn>
    </AmountContainer>
  );
};

export default AmountButton;
