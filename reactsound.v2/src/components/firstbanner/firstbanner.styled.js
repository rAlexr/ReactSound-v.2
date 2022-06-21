import styled from "styled-components";
import { colors, device } from "shared/styled/varaibles";

const { primaryOrange, primaryGray } = colors;

export const FirstBannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: ${primaryOrange};
  border-radius: 20px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 20px 0;

  @media ${device.tablet} {
    height: 400px;
    flex-direction: row;
  }

  @media ${device.desktopL} {
    height: 520px;
  }
`;

export const PatternBackground = styled.div`
  position: absolute;
  top: 0;
  opacity: 5%;
  width: 100%;
  height: 100%;
  background-image: url(${(prop) => prop.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

export const FirstBannerImage = styled.div`
  background-image: url(${(prop) => prop.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 334px;
  height: 450px;
  z-index: 10;
  position: absolute;
  top: 0;

  @media ${device.tablet} {
    position: inherit;
    width: 680px;
    height: 400px;
    background-size: contain;
    background-position: bottom;
  }

  @media ${device.laptop} {
    height: 470px;
  }

  @media ${device.laptopL} {
    height: 680px;
    width: 566px;
  }

  @media ${device.desktopL} {
    height: 840px;
    width: 920px;
    flex: 1;
  }
`;

export const FirstBannerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${device.tablet} {
    align-items: flex-start;
    text-align: start;
  }

  @media ${device.laptopL} {
    padding: 0 0 0 100px;
    flex: 1;
  }
`;

export const FirstBannerTitle = styled.h2`
  text-transform: uppercase;
  color: white;
  font-size: 35px;

  @media ${device.laptop} {
    font-size: 45px;
    margin-bottom: 0;
  }
`;

export const FirstBannerParagraph = styled.p`
  font-size: 18px;
  color: ${primaryGray};

  @media ${device.laptop} {
    line-height: 25px;
    font-size: 20px;
    max-width: 400px;
  }
`;
