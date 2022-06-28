import { PaddingContainer } from "pages/home/home.styled";
import BackLink from "components/backlink";
import ProductDetails from "components/productdetails";

const Product = () => {
  return (
    <>
      <BackLink link={"/"} />
      <PaddingContainer>
        <ProductDetails />
      </PaddingContainer>
    </>
  );
};

export default Product;
