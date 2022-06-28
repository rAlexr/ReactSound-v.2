import Layout from "containers/layout";
import Category from "pages/category/category";
import Home from "pages/home";
import Product from "pages/product";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route element={<Category />}>
            <Route path={":id"} element={<Category />} />
          </Route>
          <Route path="product" element={<Product />}>
            <Route path={":id"} element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
