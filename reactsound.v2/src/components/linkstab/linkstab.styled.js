import styled from "styled-components";
import { device, colors } from "shared/styled/varaibles";

const{ secondaryGray, primaryOrange } = colors;

export const LinksContainer = styled.div`
  background-color: black;
  display: none;

  @media ${device.laptop} {
    display: block;
  }

  a {
    color: ${secondaryGray};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    margin: 0 10px;
    letter-spacing: 2px;

    &:hover {
        color: ${primaryOrange};
    }

    @media ${device.laptopL} {
        font-size: 15px;
    }

}
`;
