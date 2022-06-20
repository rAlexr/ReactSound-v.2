import { LinksContainer } from "./linkstab.styled";
import { Link } from "react-router-dom";

const LinksTab = () => {
  return (
    <LinksContainer>
      <Link to={"/"}>home</Link>
      <Link to={"/"}>headphones</Link>
      <Link to={"/"}>speakers</Link>
      <Link to={"/"}>earphones</Link>
    </LinksContainer>
  );
};

export default LinksTab;
