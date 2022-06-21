import { FirstBannerContainer, FirstBannerImage, FirstBannerParagraph, FirstBannerText, FirstBannerTitle, PatternBackground } from "./firstbanner.styled";
import HeroText from "components/herotext";

import pattern from "shared/assets/thumbnail/special.jpg";
import speaker from "shared/assets/thumbnail/thumbnail-speakers.png";
import LinkButton from "components/linkbutton";

const FirstBanner = () => {
  return (
    <FirstBannerContainer>
      <PatternBackground img={pattern} />
      <FirstBannerImage img={speaker}/>
      <FirstBannerText>
        <FirstBannerTitle>
            zx9 speaker
        </FirstBannerTitle>

        <FirstBannerParagraph>
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </FirstBannerParagraph>
        <LinkButton link={'/'}  />
      </FirstBannerText>
    </FirstBannerContainer>
  );
};

export default FirstBanner;
