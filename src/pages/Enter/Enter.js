import FormEnter from "./FormEnter";
import Header from "../../components/Header";
import "../../styles/pages/enter.scss";
import fondo from "../../images/home-phones.png";

import { Link } from "react-router-dom";

function Enter({ data, setDataInput }) {
  const title = "Instagram";
  return (
    <div className="enter">
      <img className="enter__image" src={fondo} alt="imagen de instagram" />
      <div>
        <section className="enter__form">
          <Header title={title}></Header>
          <FormEnter data={data} setDataInput={setDataInput}></FormEnter>
        </section>{" "}
        <section className="enter__nocount">
          <h2>
            ¿No tienes una cuenta?
            <Link className="enter__link" to="/register">
              Regístrate
            </Link>
          </h2>
        </section>
      </div>
    </div>
  );
}

export default Enter;
