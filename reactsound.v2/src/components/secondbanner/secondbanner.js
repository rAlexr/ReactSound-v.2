import LinkButton from "components/linkbutton";
import mobile from "shared/assets/home/mobile/image-speaker-zx7.jpg";
import tablet from "shared/assets/home/tablet/image-speaker-zx7.jpg";
import desktop from "shared/assets/home/desktop/image-speaker-zx7.jpg";
import { SecondBannerImg, SecondBannerTitle } from "./secondbanner.styled";

const SecondBanner = () => {
    return(
        <>
           <SecondBannerImg mobile={mobile} tablet={tablet} desktop={desktop}>
            <SecondBannerTitle>zx7 speaker</SecondBannerTitle>
            <LinkButton link={'/'} />
           </SecondBannerImg>
        </>
    );
}

export default SecondBanner;