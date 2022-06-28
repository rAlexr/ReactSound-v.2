import { LinksContainer } from "./linkstab.styled";
import { Link } from "react-router-dom";

const LinksTab = () => {
  return (
    <LinksContainer>
      <Link to={"/"}>home</Link>
      <Link to={"phones"}>headphones</Link>
      <Link to={"speak"}>speakers</Link>
      <Link to={"earp"}>earphones</Link>
    </LinksContainer>
  );
};

export default LinksTab;
