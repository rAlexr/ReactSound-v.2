import styled from "styled-components";
import { device } from "shared/styled/varaibles";

export const PaddingContainer = styled.div`
  padding: 0 40px;

  @media ${device.laptop} {
    padding: 0 100px;
  }

  @media ${device.laptopL} {
    padding: 0 150px;
  }

  @media ${device.desktopL} {
    padding: 0 200px;
  }
`;
