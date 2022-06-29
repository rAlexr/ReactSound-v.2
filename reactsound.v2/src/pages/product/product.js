import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "shared/js";

import { PaddingContainer } from "pages/home/home.styled";

import BackLink from "components/backlink";
import ProductDetails from "components/productdetails";
import FeatureText from "components/featuretext";
import ImgShowCase from "components/imgshowcase";
import ThumbNailGirdle from "components/thumbnailgirdle";

const Product = () => {
  const [ data, setData ] = useState();

  const params = useParams();

  useEffect(() => {
    getData(params.id).then((response) => setData(response.data[0]));

    // eslint-disable-next-line 
  }, [])

  return (
    <>
      <BackLink link={"/"} />
      <PaddingContainer>
        <ProductDetails mobile={data?.first.mobile} tablet={data?.first.tablet} desktop={data?.first.desktop}  title={data?.name} details={data?.description} price={data?.price} />
        <FeatureText />
        <ImgShowCase />
        <ThumbNailGirdle />
      </PaddingContainer>
    </>
  );
};

export default Product;
