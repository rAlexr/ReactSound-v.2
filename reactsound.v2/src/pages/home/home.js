import FirstBanner from "components/firstbanner";
import Hero from "components/hero";

import ThumbNailGirdle from "components/thumbnailgirdle";
import { PaddingContainer } from "./home.styled";

const Home = () => {
  return (
    <>
      <Hero />
      <PaddingContainer>
        <ThumbNailGirdle />
        <FirstBanner />
        
      </PaddingContainer>
    </>
  );
};

export default Home;
