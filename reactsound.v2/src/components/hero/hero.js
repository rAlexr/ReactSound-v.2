import HeroText from "components/herotext";
import { HeroColOne, HeroColTwo, HeroContainer } from "./hero.styled";

import mobile from "shared/assets/home/mobile/moba.jpg";
import tablet from "shared/assets/home/tablet/image-header-1536.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroColOne mobile={mobile} tablet={tablet}/>
      <HeroColTwo>
        <HeroText
          gray
          promo={"new product"}
          header={"XX99 Mark II Headphones"}
          info={
            "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          }
          link={'phones'}
        />
      </HeroColTwo>
    </HeroContainer>
  );
};

export default Hero;
