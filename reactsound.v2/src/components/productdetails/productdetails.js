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

const ProductDetails = ({
  mobile,
  tablet,
  desktop,
  promo = undefined ? "" : "new product",
  title = "",
  details = "",
  price = "",
}) => {
  return (
    <>
      <DetailsContainer>
        <DetailsImage mobile={mobile} tablet={tablet} desktop={desktop} />
        <ContentDetailsWrap>
          <DetailsPromo>{promo}</DetailsPromo>
          <DetailsTitle>{title}</DetailsTitle>
          <DetailsText>{details}</DetailsText>
          <DetailsAmountContainer>
            <DetailsPrice>{price}</DetailsPrice>
            <AmountButton />
          </DetailsAmountContainer>
        </ContentDetailsWrap>
      </DetailsContainer>
    </>
  );
};

export default ProductDetails;
