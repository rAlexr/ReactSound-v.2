import styled from "styled-components";
import { device, colors } from "shared/styled/varaibles";

export const ThirdBannerContainer = styled.div`
margin: 0 0 20px 0;
@media ${device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const SingleImg = styled.div`
  background-image: url(${(prop) => prop.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin: 0 0 20px 0;

  @media ${device.tablet} {
    background-image: url(${(prop) => prop.tablet});
    height: 320px;
    flex: 1;
    margin: 0 10px 0 0;
  }

  @media ${device.laptopL} {
    background-image: url(${(prop) => prop.desktop});
  }
`;

export const SinlgeImgCol = styled.div`
background-color: ${colors.primaryGray};
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin: 20px 0 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    display: flex;
    height: 320px;
    flex: 1;
    margin: 0 0 0 10px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}
  }
`;

export const ThirdBannerTitle = styled.h2`
  text-transform: uppercase;
  font-size: 35px;

  @media ${device.laptopL} {
    font-size: 70px;
    margin: 80px 0 30px 0;
  }
`;
