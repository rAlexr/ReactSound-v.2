import styled from "styled-components";
import { Link } from "react-router-dom";

import { device, colors } from "shared/styled/varaibles";

export const BackComp = styled(Link)`
  display: block;
  color: ${colors.secondaryGray};
  text-transform: uppercase;
  font-weight: 500;
  padding: 40px 0 0 40px;

  &:hover {
    color: ${colors.primaryOrange};
  }

  @media ${device.laptop} {
    padding: 40px 0 0 100px;
  }

  @media ${device.laptopL} {
    padding: 40px 0 0 150px;
  }

  @media ${device.desktopL} {
    padding: 40px 0 0 200px;
  }
`;
