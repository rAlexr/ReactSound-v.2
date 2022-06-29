import styled from "styled-components";
import { device } from "shared/styled/varaibles";

export const ImgShowCaseContainer = styled.div`
    padding: 25px 0;

    @media ${device.tablet} {
        width: 100%;
        display: flex;
    }
`;

export const ImgFirstCol = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 0 20px 0 0;
        > div:nth-child(1) {
            margin-bottom: 20px;
        }
    }
`;

export const ShowImg = styled.div`
background-image: url(${(props) => props.mobile});
  width: 100%;
  height: 200px;
  margin: 25px 0;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    background-image: url(${(props) => props.tablet});
    margin: 0;
  }

  @media ${device.laptopL} {
    height: 400px;
  }
`;

export const ImgSecondCol = styled.div`
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
    height: initial;
  }

  @media ${device.laptopL} {
    background-position: unset;
  }
`;