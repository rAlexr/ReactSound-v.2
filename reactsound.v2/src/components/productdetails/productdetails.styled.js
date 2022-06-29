import styled from "styled-components";

import { device } from "shared/styled/varaibles";
import { colors } from "shared/styled/varaibles";

const { primaryOrange, secondaryGray } = colors;

export const DetailsContainer = styled.div`
  padding: 40px 0;

  @media ${device.tablet} {
    display: flex;
  }
`;

export const DetailsImage = styled.div`
  background-image: url(${(props) => props.mobile});
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    background-image: url(${(props) => props.tablet});
    flex: 1;
  }

  @media ${device.laptop} {
    flex: 2;
  }

  @media ${device.desktopL} {
    background-image: url(${(props) => props.desktop});
    height: 600px;
  }
`;

export const ContentDetailsWrap = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    flex: 2;
    justify-content: center;
    padding: 0 0 0 100px;
  }
`;

export const DetailsPromo = styled.p`
  color: ${primaryOrange};
  text-transform: upperCase;
  letter-spacing: 10px;
`;

export const DetailsTitle = styled.h1`
  text-transform: upperCase;

  @media ${device.tablet} {
    max-width: 340px;
  }

  @media ${device.laptopL} {
    font-size: 40px;
    max-width: 500px;
  }

  @media ${device.desktopL} {
    font-size: 60px;
  }
`;

export const DetailsText = styled.p`
  margin: 16px 0 20px 0;
  font-size: 15px;
  line-height: 23px;
  color: ${secondaryGray};

  @media ${device.tablet} {
    max-width: 436px;
  }

  @media ${device.laptopL} {
    font-size: 17px;
    line-height: 23px;
  }

  @media ${device.desktopL} {
    font-size: 19px;
    max-width: 550px;
  }
`;

export const DetailsAmountContainer = styled.div``;

export const DetailsPrice = styled.p`
  font-weight: bold;
`;
