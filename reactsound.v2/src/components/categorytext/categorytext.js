import LinkButton from "components/linkbutton";
import {
  CategoryDescription,
  CategoryTextHeader,
  CategoryTextImg,
  CategoryTextMainContainer,
  PromoText,
  TextContainer,
} from "./category.styled";

const CategoryText = ({
  mobile,
  tablet,
  desktop,
  promoText = undefined ? '' : 'new product',
  title = "",
  description = "",
  link = "",
  btncolor = undefined ? 'orange' : 'black',
}) => {
  return (
    <CategoryTextMainContainer>
      <CategoryTextImg mobile={mobile} tablet={tablet} desktop={desktop} />
      <TextContainer>
        <PromoText>{promoText}</PromoText>
        <CategoryTextHeader>{title}</CategoryTextHeader>
        <CategoryDescription>{description}</CategoryDescription>
        <LinkButton link={link} color={btncolor} />
      </TextContainer>
    </CategoryTextMainContainer>
  );
};

export default CategoryText;
