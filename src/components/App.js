import "../styles/App.scss";
import ls from "../services/localstorage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Enter from "../pages/Enter/Enter";

import Register from "../pages/Register/Register";

function App() {
  const [data, setData] = useState({
    mail: ls.get("url", {}).mail || "",
    name: ls.get("url", {}).name || "",
    user: ls.get("url", {}).user || "",
    password: ls.get("url", {}).password || "",
  });
  /* FUNCIONES HANDLER */
  const setDataInput = (inputValue, inputName) => {
    setData({ ...data, [inputName]: inputValue });
  };
  return (
    <div className="App">
      {
        <Routes>
          <Route
            path="/"
            element={<Enter data={data} setDataInput={setDataInput}></Enter>}
          ></Route>
          <Route
            path="/register"
            element={
              <Register data={data} setDataInput={setDataInput}></Register>
            }
          ></Route>
        </Routes>
      }
    </div>
  );
}

export default App;
