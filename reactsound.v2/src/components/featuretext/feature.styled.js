import styled from "styled-components";
import { device } from "shared/styled/varaibles";
import { colors } from "shared/styled/varaibles";

const { secondaryGray, primaryOrange } = colors;

export const FeatureContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
    padding: 50px 0;
  }
`;

export const FeatureTextWrap = styled.div`
  @media ${device.tablet} {
    margin: 0 0 35px 0;
  }

  @media ${device.laptop} {
    max-width: 60%;
    padding: 0 100px 0 0;
  }
`;

export const FeatureTitle = styled.h1`
  text-transform: uppercase;

  @media ${device.laptop} {
    margin-top: 0;
  }
`;

export const FeatureDescription = styled.p`
  color: ${secondaryGray};
  line-height: 23px;
  font-size: 15px;
`;

export const FeatureBoxWrap = styled.div`
  @media ${device.tablet} {
    display: flex;
  }

  @media ${device.laptop} {
    flex-direction: column;
    padding: 50px 0 0 0;
  }
`;

export const FeatureBoxTitle = styled.h1`
  text-transform: uppercase;

  @media ${device.tablet} {
    margin-top: 0;
    padding-right: 170px;
  }

  @media ${device.laptop} {
    padding: 0;
  }
`;

export const FeatureBoxContentWrap = styled.div`
  @media ${device.tablet} {
    margin: 0 0 35px 0;
    & p:first-child {
      margin-top: 0;
    }
  }
`;

export const FeatureBoxParagraph = styled.p`
  text-transform: capitalize;
  line-height: 23px;
  color: ${secondaryGray};

  > span {
    color: ${primaryOrange};
    text-transform: lowercase;
    font-weight: bold;
    padding: 0 20px 0 0;
  }
`;
