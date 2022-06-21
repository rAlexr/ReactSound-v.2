import { MarketingContainer, MarketingImage, MarketingText, MarketingTextContainer, MarketingTitle } from "./marketingbanner.styled";

import mobile from "shared/assets/shared/mobile/image-best-gear.jpg";
import tablet from "shared/assets/shared/tablet/image-best-gear.jpg";
import desktop from "shared/assets/shared/desktop/image-best-gear.jpg";

const MarketingBanner = () => {
    return(
        <MarketingContainer>

        <MarketingImage mobile={mobile} tablet={tablet} desktop={desktop}/>
        <MarketingTextContainer>
            <MarketingTitle>
            Bringing you the <span>best</span>audio gear
            </MarketingTitle>
            <MarketingText>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </MarketingText>
        </MarketingTextContainer>

        </MarketingContainer>
    );
}

export default MarketingBanner;