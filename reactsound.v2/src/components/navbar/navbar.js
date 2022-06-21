import { ReactComponent as BurgerMenu } from "shared/svg/hamburger.svg";
import { ReactComponent as Logo } from "shared/svg/logo.svg";
import { ReactComponent as Cart } from "shared/svg/cart.svg";
import { NavContainer } from "./navbar.styled";
import LinksTab from "components/linkstab";


const NavBar = () => {
  return (
    <>
      <NavContainer>
        <BurgerMenu />
        <Logo />
        <LinksTab />
        <Cart />
      </NavContainer>
    </>
  );
};

export default NavBar;
