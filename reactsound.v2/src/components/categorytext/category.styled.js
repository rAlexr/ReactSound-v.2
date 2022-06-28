import styled from "styled-components";
import { device, colors } from "shared/styled/varaibles";

const { primaryOrange, secondaryGray } = colors;

export const CategoryTextMainContainer = styled.div`
  padding: 40px;

  @media ${device.laptop} {
    padding: 40px 100px;
    display: flex;
    justify-content: space-evenly;
  }

  @media ${device.laptopL} {
    padding: 40px 150px;
  }

  @media ${device.desktopL} {
    padding: 100px 200px;
  }
`;

export const CategoryTextImg = styled.div`
  background-image: url(${(props) => props.mobile});
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    background-image: url(${(props) => props.tablet});
    height: 400px;
  }

  @media ${device.laptop} {
    background-image: url(${(props) => props.desktop});
    height: 500px;
    width: 600px;
  }
`;

export const TextContainer = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${device.laptop} {
    align-items: start;
    text-align: start;
  }
`;

export const PromoText = styled.p`
  color: ${primaryOrange};
  text-transform: upperCase;
  letter-spacing: 10px;
`;

export const CategoryTextHeader = styled.h1`
  text-transform: upperCase;

  @media ${device.tablet} {
    max-width: 230px;
  }

  @media ${device.laptopL} {
    font-size: 40px;
    max-width: 500px;
  }

  @media ${device.desktopL} {
    font-size: 60px;
  }
`;

export const CategoryDescription = styled.p`
  margin: 16px 0 20px 0;
  font-size: 15px;
  line-height: 20px;
  color: ${secondaryGray};

  @media ${device.tablet} {
    max-width: 450px;
  }

  @media ${device.laptopL} {
    max-width: 500px;
    font-size: 17px;
  }

  @media ${device.desktopL} {
    max-width: 600px;
    font-size: 19px;
  }
`;
