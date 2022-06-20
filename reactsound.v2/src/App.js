import { useState, useEffect } from "react";
import LinksTab from "./components/linkstab";
import { getData } from "./shared/js";


function App() {
  const [mydata, setmyData] = useState({});

  useEffect(() => {
    getData().then((res) => setmyData(res.data));

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <LinksTab />
    </div>
  );
}

export default App;
