import AmountButton from "components/amountbutton";
import {
  ContentDetailsWrap,
  DetailsAmountContainer,
  DetailsContainer,
  DetailsImage,
  DetailsPrice,
  DetailsPromo,
  DetailsText,
  DetailsTitle,
} from "./productdetails.styled";

import mobile from "shared/assets/product-xx59-headphones/mobile/image-product.jpg";
import tablet from "shared/assets/product-xx59-headphones/tablet/image-product.jpg";
import desktop from "shared/assets/product-xx59-headphones/desktop/image-product.jpg";

const ProductDetails = () => {
  return (
    <>
      <DetailsContainer>
        <DetailsImage mobile={mobile} tablet={tablet} desktop={desktop} />
        <ContentDetailsWrap>
          <DetailsPromo>new product</DetailsPromo>
          <DetailsTitle>YX1 WIRELESS EARPHONES</DetailsTitle>
          <DetailsText>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </DetailsText>
          <DetailsAmountContainer>
            <DetailsPrice>$ 10</DetailsPrice>
            <AmountButton />
          </DetailsAmountContainer>
        </ContentDetailsWrap>
      </DetailsContainer>
    </>
  );
};

export default ProductDetails;
