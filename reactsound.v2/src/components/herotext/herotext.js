import LinkButton from "components/linkbutton";
import {
  HeroHeader,
  HeroInfoParagraph,
  HeroPromoParagraph,
  HeroTextContainer,
} from "./herotext.style";

const HeroText = ({ promo = "", header = "", info = "", btncolor= "", link="", display='' }) => {
  return (
    <>
        <HeroTextContainer>
          <HeroPromoParagraph>{promo}</HeroPromoParagraph>
          <HeroHeader>{header}</HeroHeader>
          <HeroInfoParagraph>{info}</HeroInfoParagraph>
          <LinkButton color={btncolor} link={link} />
        </HeroTextContainer>
    </>
  );
};

export default HeroText;
