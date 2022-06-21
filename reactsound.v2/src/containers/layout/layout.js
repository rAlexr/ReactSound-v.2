import MarketingBanner from "components/marketingbanner";
import NavBar from "components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <MarketingBanner />
    </>
  );
};

export default Layout;
