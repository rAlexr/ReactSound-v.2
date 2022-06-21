import styled from "styled-components";
import { device, colors } from "shared/styled/varaibles";

export const FooterContainer = styled.div`
  height: 654px;
  padding: 0 40px;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  @media ${device.tablet} {
    height: 400px;
  }

  @media ${device.laptop} {
    padding: 0 100px;
  }

  @media ${device.laptopL} {
    padding: 0 150px;
  }
  
  @media ${device.desktopL} {
    padding: 0 200px;
  }
`;

export const FooterFirstRow = styled.div`

@media ${device.tablet} {
    width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`;

export const FooterSecondRow = styled.div`
    @media ${device.laptop} {
        width: 100%;
    }
`;

export const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media ${device.tablet} {
      font-size: 15px;
      flex-direction: row;
    }

    a {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 15px;
    margin: 0 5px;
    letter-spacing: 2px;
    padding: 15px 0;

    &:hover {
      color: ${colors.primaryOrange};
    }

`;
export const FooterText = styled.p`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 20px;
  color: ${colors.secondaryGray};

  @media ${device.tablet} {
    text-align: start;
  }

  @media ${device.laptop} {
    max-width: 600px;
    font-size: 17px;
}

@media ${device.laptopL} {
    max-width: 800px;
}
`;

export const FooterThirdRow = styled.div`
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterCopyRight = styled.p`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 20px;
  color: ${colors.secondaryGray};
`;

export const FooterSocialsContainer = styled.div`
  svg {
    fill: white;
    padding: 0 10px;

    &:hover {
      fill: ${colors.primaryOrange};
    }
  }
`;
