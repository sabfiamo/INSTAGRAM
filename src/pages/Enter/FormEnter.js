import Input from "../../components/Input";
import Button from "../../components/Button";
import ConectByFacebook from "../../components/ConectByFacebook";

function FormEnter({ data, setDataInput }) {
  const text = "Entrar";
  const toRouter="/profile"
  const fromRegister = "colorReverse";
  return (
    <>
      <fieldset className="enter__container">
        <Input
          value={data.user}
          name="user"
          id="user"
          placeholder="Teléfono, usuario o correo electrónico"
          setDataInput={setDataInput}
        />
        <Input
          value={data.password}
          name="password"
          id="password"
          placeholder="Contraseña"
          setDataInput={setDataInput}
        />
        <Button text={text} toRouter={toRouter}></Button>
        <ConectByFacebook fromRegister={fromRegister}></ConectByFacebook>

        <h2 className="enter__forgetPassword">¿Has olvidado la contraseña?</h2>
      </fieldset>
    </>
  );
}

export default FormEnter;
