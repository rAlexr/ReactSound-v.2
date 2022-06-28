import CategoryHeader from "components/categoryheader";
import CategoryText from "components/categorytext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "shared/js";

import { RevertCont } from "./category.styled";

const Category = () => {
  const [mydata, setmyData] = useState();
  const params = useParams();

  useEffect(() => {
    getData(params.id).then((response) => setmyData(response.data));

    // eslint-disable-next-line
  }, []);

  console.log(mydata?.map((item) => console.log(item.img[0].mobile)));

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
            // make a JSON path for products ~!
          />
        ))}
      </RevertCont>
    </>
  );
};

export default Category;
