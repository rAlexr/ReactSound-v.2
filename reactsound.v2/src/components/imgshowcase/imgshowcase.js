import { ImgFirstCol, ImgSecondCol, ImgShowCaseContainer, ShowImg } from "./imgshowcaser.styled";

import mobile1 from "shared/assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import tablet1 from "shared/assets/product-xx59-headphones/tablet/image-gallery-1.jpg";
import desktop1 from "shared/assets/product-xx59-headphones/desktop/image-gallery-1.jpg";

import mobile2 from "shared/assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import tablet2 from "shared/assets/product-xx59-headphones/tablet/image-gallery-2.jpg";
import desktop2 from "shared/assets/product-xx59-headphones/desktop/image-gallery-2.jpg";

import mobile3 from "shared/assets/product-xx59-headphones/mobile/image-gallery-3.jpg";
import tablet3 from "shared/assets/product-xx59-headphones/tablet/image-gallery-3.jpg";
import desktop3 from "shared/assets/product-xx59-headphones/desktop/image-gallery-3.jpg";

const ImgShowCase = () => {
    return(
        <ImgShowCaseContainer>
            <ImgFirstCol>
                <ShowImg mobile={mobile1} tablet={tablet1} desktop={desktop1}/>
                <ShowImg mobile={mobile2} tablet={tablet2} desktop={desktop2}/>
            </ImgFirstCol>

            <ImgSecondCol mobile={mobile3} tablet={tablet3} desktop={desktop3}/>

        </ImgShowCaseContainer>
    );
};

export default ImgShowCase;
