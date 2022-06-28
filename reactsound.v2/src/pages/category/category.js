import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "shared/js";

import CategoryHeader from "components/categoryheader";
import CategoryText from "components/categorytext";
import ThumbNailGirdle from "components/thumbnailgirdle";

import { RevertCont } from "./category.styled";
import { PaddingContainer } from "pages/home/home.styled";

const Category = () => {
  const [mydata, setmyData] = useState();
  const params = useParams();

  useEffect(() => {
    getData(params.id).then((response) => setmyData(response.data));

    // eslint-disable-next-line
  }, [params]);

  return (
    <>
      <CategoryHeader />
      <RevertCont>
        {mydata?.map((item, index) => (
          <CategoryText
            key={index}
            mobile={item?.img[0]?.mobile}
            tablet={item?.img[0]?.tablet}
            desktop={item?.img[0]?.desktop}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </RevertCont>
      <PaddingContainer>
        <ThumbNailGirdle />
      </PaddingContainer>
    </>
  );
};

export default Category;
