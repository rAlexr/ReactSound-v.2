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


const Footer = () => {
  return (
    <FooterContainer>
      <FooterFirstRow>
        <Logo />
        <FooterMenu>
          <Link to={"/"}>home</Link>
          <Link to={"/"}>headphones</Link>
          <Link to={"/"}>speakers</Link>
          <Link to={"/"}>earphones</Link>
        </FooterMenu>
      </FooterFirstRow>
      <FooterSecondRow>
        <FooterText>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </FooterText>
      </FooterSecondRow>
      <FooterThirdRow>
        <FooterCopyRight>Copyright 2021. All Rights Reserved</FooterCopyRight>
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
