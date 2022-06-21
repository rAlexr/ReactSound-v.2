import styled from "styled-components";
import { device, colors } from "shared/styled/varaibles";

export const MarketingContainer = styled.div`
  padding: 0 40px;

  @media ${device.laptop} {
    padding: 0 100px;
  }

  @media ${device.laptopL} {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 150px;
  }

  @media ${device.desktopL} {
    padding: 0 200px;
  }
`;

export const MarketingImage = styled.div`
  background-image: url(${(prop) => prop.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 300px;
  border-radius: 20px;

  @media ${device.tablet} {
    background-image: url(${(prop) => prop.tablet});
  }

  @media ${device.laptopL} {
    background-image: url(${(prop) => prop.desktop});
    height: 588px;
    width: 1110px;
  }
`;

export const MarketingTextContainer = styled.div`
  width: 100%;
  text-align: center;

  @media ${device.laptopL} {
    text-align: start;
  }
`;

export const MarketingTitle = styled.h2`
  font-size: 28px;
  text-transform: uppercase;

  span {
    color: ${colors.primaryOrange};
  }

  @media ${device.tablet} {
    margin: 40px auto;
    font-size: 40px;
    max-width: 600px;
  }

  @media ${device.desktopL} {
    margin: 0 0 20px 0;
    font-size: 50px;
  }
`;

export const MarketingText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.secondaryGray};
  line-height: 23px;

  @media ${device.laptop} {
    max-width: 625px;
    margin: 40px auto;
  }

  @media ${device.laptopL} {
    padding: 0 100px 0 0;
  }

  @media ${device.desktopL} {
    font-size: 17px;
    margin: 10px 0 0 0;
    line-height: 25px;
  }
`;
