import styled from "styled-components";
import { device } from "shared/styled/varaibles";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: black;
  border-bottom: 1px solid #d87d4a;
  
  svg {
    fill: white;

    &:hover {
      fill: #d87d4a;
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    position: relative;

    & svg:nth-child(2) {
        position: absolute;
        left: 100px;
    }

  @media ${device.laptop} {
    padding: 40px 100px;
    & svg:nth-child(1) {
        display: none;
    }

    & svg:nth-child(2) {
        position: initial;
    }
  }

  @media ${device.laptopL} {
    padding: 40px 150px;
  }

  @media ${device.desktopL} {
    padding: 40px 200px;
  }

`;
