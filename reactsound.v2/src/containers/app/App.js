import Layout from "containers/layout";
import Home from "pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
