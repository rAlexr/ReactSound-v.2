import styled from "styled-components";
import { colors, device } from "shared/styled/varaibles";

const { primaryGray, primaryOrange, white } = colors;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  a {
    &:hover {
      color: white;
    }
  }

  @media ${device.laptop} {
    align-items: start;
    text-align: start;
  }

  @media ${device.desktop} {
  }

  @media ${device.desktopL} {
  }
`;

export const HeroPromoParagraph = styled.p`
  color: ${(props) => (props.gray ? primaryGray : primaryOrange)};
  text-transform: upperCase;
  letter-spacing: 10px;

  @media ${device.desktop} {
    font-size: 23px;
  }
`;

export const HeroHeader = styled.h1`
  color: ${white};
  font-size: 50px;
  font-weight: 600;
  max-width: 400px;

  @media${device.tablet} {
    font-size: 76px;
    max-width: 600px;
  }

  @media${device.laptop} {
    font-size: 56px;
  }

  @media ${device.desktopL} {
    font-size: 76px;
    width: 480px;
    letter-spacing: 2px;
  }
`;

export const HeroInfoParagraph = styled.p`
  color: ${primaryGray};
  max-width: 330px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 20px;

  @media ${device.laptop} {

    max-width: 400px;
  }

  @media ${device.desktopL} {
    max-width: 500px;
    font-size: 20px;
    line-height: 25px;
  }
`;
