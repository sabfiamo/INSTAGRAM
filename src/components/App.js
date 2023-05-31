import "../styles/App.scss";
import ls from "../services/localstorage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Enter from "../pages/Enter/Enter";

import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";

function App() {
  const [data, setData] = useState({
    mail: ls.get("url", {}).mail || "",
    name: ls.get("url", {}).name || "",
    user: ls.get("url", {}).user || "",
    password: ls.get("url", {}).password || "",
  });

  const [btnState, setBtnState] = useState(false);

  /* FUNCIONES HANDLER */
  const setDataInput = (inputValue, inputName) => {
    setData({ ...data, [inputName]: inputValue });
  };
  function handleClick() {
    console.log("entro");
    setBtnState((btnState) => !btnState);
  }

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
          <Route
            path="/profile"
            element={
              <Profile btnState={btnState} handleClick={handleClick}></Profile>
            }
          ></Route>
        </Routes>
      }
    </div>
  );
}

export default App;
