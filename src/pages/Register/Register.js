import FormRegister from "./FormRegister";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../styles/pages/register.scss";

function Register({ data, setDataInput }) {
  const title = "Instagram";
  const subtitle = "Regístrate para ver fotos y vídeos de tus amigos.";
  return (
    <>
      <div className="register">
        <Header title={title} subtitle={subtitle}></Header>
        <FormRegister data={data} setDataInput={setDataInput}></FormRegister>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Register;
