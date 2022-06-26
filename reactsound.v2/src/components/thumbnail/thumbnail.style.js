import styled from "styled-components";
import { colors, device } from "shared/styled/varaibles";
import { Link } from "react-router-dom";

const { secondaryGray, primaryOrange, white } = colors;

export const ThumbContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 140px;
  background: rgb(65, 65, 65);
  background: linear-gradient(
    360deg,
    rgba(65, 65, 65, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 20px;
  padding: 0 0 30px 0;

  @media ${device.mobileL} {
    width: 326px;
  }

  @media ${device.tablet} {
    width: 223px;
    height: 140px;
    margin: 0 15px;
  }

  @media ${device.laptopL} {
    width: 350px;
    height: 170px;
    margin: 0;
  }

  @media ${device.desktopL} {
    height: 200px;
  }
`;

export const ThumbImage = styled.img`
  height: 160px;
  width: 166px;
  position: absolute;
  top: -50px;

  @media ${device.laptopL} {
    height: 210px;
    width: 230px;
  }
`;

export const ThumbHeader = styled.h3`
  font-size: 18px;
  text-transform: uppercase;
  color: ${white};
`;

export const ThumbWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    &:hover {
      color: white;
    }
  }
`;
export const ThumbLink = styled(Link)`
  font-size: 13px;
  text-transform: uppercase;
  padding: 1px 10px 0 0;
  color: ${primaryOrange};
  font-weight: 500;
`;

export const SvgContainer = styled.div``;
