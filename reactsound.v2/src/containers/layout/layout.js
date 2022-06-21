import { Outlet } from "react-router-dom";

import Footer from "components/footer";
import MarketingBanner from "components/marketingbanner";
import NavBar from "components/navbar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <MarketingBanner />
      <Footer />
    </>
  );
};

export default Layout;
