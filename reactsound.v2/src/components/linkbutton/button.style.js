import styled from "styled-components";

import { Link } from "react-router-dom";
import { colors } from "shared/styled/varaibles";

const { primaryOrange, black, secondaryOrange, white } = colors;

export const LinkButtonStyle = styled(Link)`
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background-color: ${(props) => (props.orange ? primaryOrange : black)};
  color: ${white};
  text-align: center;
  letter-spacing: 2px;
  font-size: 13px;
  z-index: 10;
  margin: 0 0 10px 0;

  &:hover {
    background-color: ${(props) => props.orange ? secondaryOrange : "transparent"};
    color: ${black};
    border: ${(props) => props.orange ? 'none' : "1px solid black"};
  }
`;
