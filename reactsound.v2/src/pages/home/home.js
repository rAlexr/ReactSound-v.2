import FirstBanner from "components/firstbanner";
import Hero from "components/hero";
import SecondBanner from "components/secondbanner";
import ThirdBanner from "components/thirdbanner";


import ThumbNailGirdle from "components/thumbnailgirdle";
import { PaddingContainer } from "./home.styled";

const Home = () => {
  return (
    <>
      <Hero />
      <PaddingContainer>
        <ThumbNailGirdle />
        <FirstBanner />
        <SecondBanner />
        <ThirdBanner />
      </PaddingContainer>
    </>
  );
};

export default Home;
