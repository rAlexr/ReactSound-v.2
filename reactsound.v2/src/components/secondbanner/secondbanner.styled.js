import styled from "styled-components";
import { device } from "shared/styled/varaibles";

export const SecondBannerImg = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${(prop) => prop.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 20px 0;

  a {
    margin: 0 0 0 25px;
    background-color: transparent;
    color: black;
    font-weight: bold;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  @media ${device.tablet} {
    background-image: url(${(prop) => prop.tablet});

    a {
      margin: 0 0 0 75px;
    }
  }

  @media ${device.laptop} {
    a {
      margin: 0 0 0 100px;
    }
  }

  @media ${device.laptopL} {
    background-image: url(${(prop) => prop.desktop});

    a {
      margin: 0 0 0 125px;
    }
  }
`;

export const SecondBannerTitle = styled.h2`
  padding: 0 0 0 25px;
  text-transform: uppercase;
  font-size: 35px;

  @media ${device.tablet} {
    padding: 0 0 0 75px;
  }

  @media ${device.laptop} {
    padding: 0 0 0 100px;
  }

  @media ${device.laptopL} {
    padding: 0 0 0 125px;
    font-size: 75px;
  }
`;
