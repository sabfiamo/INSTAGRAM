import FormEnter from "./FormEnter";
import { Link } from "react-router-dom";

function Enter() {
  return (
    <div className="enter">
      <h1 className="enter__title">Instagram</h1>

      <FormEnter></FormEnter>
      <div className="enter__registre">
        <h2 className="enter__info">
          ¿No tienes cuenta? <span className="blue">Regístrate</span>
        </h2>
      </div>
    </div>
  );
}

export default Enter;
