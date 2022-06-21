import styled from "styled-components";
import { device } from "shared/styled/varaibles";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: black;
  
  svg {
    fill: white;
  }

  @media ${device.tablet} {
    position: relative;

    & svg:nth-child(2) {
        position: absolute;
        left: 100px;
    }

  @media ${device.laptop} {
    & svg:nth-child(1) {
        display: none;
    }

    & svg:nth-child(2) {
        position: initial;
    }
  }

`;
