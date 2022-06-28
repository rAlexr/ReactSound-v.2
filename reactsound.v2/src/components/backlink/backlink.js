import { BackComp } from "./backlink.styled";

const BackLink = ({ link = "", text = undefined ? "" : "go back" }) => {
  return (
    <>
      <BackComp to={link}>{text}</BackComp>
    </>
  );
};

export default BackLink;
