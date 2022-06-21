import styled from "styled-components";
import { device } from "shared/styled/varaibles";

export const HeroContainer = styled.div`
  height: 100vh;
  background-color: #191919;

  @media ${device.tablet} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${device.laptop} {
    flex-direction: row-reverse;
    padding: 0 0 0 100px;
  }

  @media ${device.laptopL} {
    padding: 0 0 0 150px;
  }

  
  @media ${device.desktopL} {
    padding: 0 0 0 200px;
  }
`;

export const HeroColTwo = styled.div`
  @media ${device.tablet} {
    position: absolute;
  }

  @media ${device.laptop} {
    position: relative;
    flex: 1;
  }
`;

export const HeroColOne = styled.div`
  background-image: url(${(props) => props.mobile});
  width: 100%;
  height: 50vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media ${device.tablet} {
    background-image: url(${(props) => props.tablet});
    height: 100vh;
    background-size: cover;
  }

  @media ${device.laptop} {
    flex:2;
    background-size: contain;
  }
`;
