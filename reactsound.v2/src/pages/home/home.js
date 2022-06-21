import FirstBanner from "components/firstbanner";
import Hero from "components/hero";
import SecondBanner from "components/secondbanner";


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
      </PaddingContainer>
    </>
  );
};

export default Home;
