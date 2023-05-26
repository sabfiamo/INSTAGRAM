import FormRegister from "./FormRegister";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

function Register({ data, setDataInput }) {
  const title = "Instagram";
  const subtitle = "Regístrate para ver fotos y vídeos de tus amigos.";
  return (
    <div className="enter">
      <Header title={title} subtitle={subtitle}></Header>
      <FormRegister data={data} setDataInput={setDataInput}></FormRegister>
      <div className="enter__registre">
        <h2 className="enter__info">
          ¿Tienes cuenta? <span className="blue">Entrar</span>
        </h2>
      </div>
    </div>
  );
}

export default Register;
