import NavBar from "components/navbar";
import { useState, useEffect } from "react";
import { getData } from "./shared/js";

function App() {
  // const [mydata, setmyData] = useState({});

  // useEffect(() => {
  //   getData().then((res) => setmyData(res.data));

  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
     <NavBar />
    </div>
  );
}

export default App;
