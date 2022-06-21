
import mobile from "shared/assets/home/mobile/image-earphones-yx1.jpg";
import tablet from "shared/assets/home/tablet/image-earphones-yx1.jpg";
import desktop from "shared/assets/home/desktop/image-earphones-yx1.jpg";
import { SingleImg, SinlgeImgCol, ThirdBannerContainer, ThirdBannerTitle } from "./thirdbanner.styled";
import LinkButton from "components/linkbutton";

const ThirdBanner = () => {
    return(
      <ThirdBannerContainer>
        <SingleImg mobile={mobile} tablet={tablet} desktop={desktop}/>
        <SinlgeImgCol>
            <ThirdBannerTitle>yx1 earphones</ThirdBannerTitle>
            <LinkButton link={'/'} />
        </SinlgeImgCol>
      </ThirdBannerContainer>
    );
}

export default ThirdBanner;