import "../styles/App.scss";
import ls from "../services/localstorage";
import { useState } from "react";
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
  // return <div className="App">{/* Aquí va el HTML */ <Enter></Enter>}</div>;
  return (
    <div className="App">
      {
        /* Aquí va el HTML */ <Register
          data={data}
          setDataInput={setDataInput}
        ></Register>
      }
    </div>
  );
}

export default App;
