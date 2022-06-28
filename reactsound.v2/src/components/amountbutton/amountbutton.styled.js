import styled from "styled-components";
import { colors } from "shared/styled/varaibles";
const { primaryOrange, secondaryOrange } = colors;

export const AmountContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const AmountInDecContainer = styled.div`
  width: 100px;
  height: 48px;
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 60px 0 0;
`;

export const Increment = styled.button`
  width: 50px;
  height: 100%;
  border: none;

  &:hover {
    background-color: ${primaryOrange};
    color: white;
  }
`;

export const Decrement = styled.button`
  width: 50px;
  height: 100%;
  border: none;

  &:hover {
    background-color: ${primaryOrange};
    color: white;
  }
`;

export const DisplayAmount = styled.span`
  font-weight: bold;
`;

export const CartBtn = styled.button`
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${primaryOrange};
  color: white;
  text-align: center;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 500;
  border: none;

  &:hover {
    background-color: ${secondaryOrange};
  }
`;