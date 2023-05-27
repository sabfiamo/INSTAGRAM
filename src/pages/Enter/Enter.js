import FormEnter from "./FormEnter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/pages/enter.scss";

import googlePlay from "../../images/LjIQEL8csb0.png";
import microsoftStore from "../../images/xOhODS7viZl.png";

import { Link } from "react-router-dom";

function Enter({ data, setDataInput }) {
  const title = "Instagram";
  return (
    <>
      <div className="enter">
        <section className="enter__slider">
          <div className="enter__slider--content"></div>
        </section>
        <div>
          <section className="enter__form">
            <Header title={title}></Header>
            <FormEnter data={data} setDataInput={setDataInput}></FormEnter>
          </section>
          <section className="enter__nocount">
            <h2>
              ¿No tienes una cuenta?
              <Link className="enter__link" to="/register">
                Regístrate
              </Link>
            </h2>
          </section>
          <section className="enter__noaplication">
            <h2>¿Descarga la aplicación?</h2>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://l.instagram.com/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26referrer%3Dutm_source%253Dinstagramweb%2526utm_campaign%253DloginPage%2526ig_mid%253DF865C94A-CC66-4E84-8711-4A6E1BC25FAA%2526utm_content%253Dlo%2526utm_medium%253Dbadge&e=AT2oYGOMwugi7e9huRM1JXmHxTdtbIACFpajNgj9RwIBzajSzTIUaDnZaqLNN2EPlbam49G_-3S4mo0Jq6J0JH2RDe0QYbxqlc2rINb8_sY9oZgAu1bFB3HvufX3uiHRriKEVlsgP7W9qL38hwngyA"
              >
                <img
                  className="enter__download"
                  src={googlePlay}
                  alt="GooglePlay"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=1360%2C0%2C1920%2C1040"
              >
                <img
                  className="enter__download"
                  src={microsoftStore}
                  alt="MicrosoftStore"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Enter;
