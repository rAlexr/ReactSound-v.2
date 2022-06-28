import {
  FooterContainer,
  FooterCopyRight,
  FooterFirstRow,
  FooterMenu,
  FooterSecondRow,
  FooterSocialsContainer,
  FooterText,
  FooterThirdRow,
} from "./footer.styled";

import { ReactComponent as Logo } from "shared/svg/logo.svg";
import { ReactComponent as Facebook } from "shared/svg/facebook.svg";
import { ReactComponent as Twitter } from "shared/svg/twitter.svg";
import { ReactComponent as Instagram } from "shared/svg/instagram.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "shared/js";

const Footer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData("footer").then((response) => setData(response.data[0]));

    // eslint-disable-next-line
  }, []);

  return (
    <FooterContainer>
      <FooterFirstRow>
        <Logo />
        <FooterMenu>
          <Link to={"/"}>home</Link>
          <Link to={"phones"}>headphones</Link>
          <Link to={"speak"}>speakers</Link>
          <Link to={"earp"}>earphones</Link>
        </FooterMenu>
      </FooterFirstRow>
      <FooterSecondRow>
        <FooterText>{data?.text}</FooterText>
      </FooterSecondRow>
      <FooterThirdRow>
        <FooterCopyRight>
          Copyright {data?.year}. All Rights Reserved
        </FooterCopyRight>
        <FooterSocialsContainer>
          <Facebook />
          <Twitter />
          <Instagram />
        </FooterSocialsContainer>
      </FooterThirdRow>
    </FooterContainer>
  );
};

export default Footer;
