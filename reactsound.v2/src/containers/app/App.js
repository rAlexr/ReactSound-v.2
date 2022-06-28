import Layout from "containers/layout";
import Category from "pages/category/category";
import Home from "pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route element={<Category />}>
            <Route path={":id"} element={<Category />} />
            <Route path={"headphones"} element={<Category />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
