import Input from "../../components/Input";
import Button from "../../components/Button";
import ConectByFacebook from "../../components/ConectByFacebook";
function FormRegister({ data, setDataInput }) {
  const text = "Siguiente";
  return (
    <fieldset className="register__container">
      <ConectByFacebook></ConectByFacebook>
      <Input
        value={data.mail}
        name="mail"
        id="mail"
        placeholder="Número de móvil o correo electrónico"
        setDataInput={setDataInput}
      />
      <Input
        value={data.name}
        name="name"
        id="name"
        placeholder="Nombre completo"
        setDataInput={setDataInput}
      />
      <Input
        value={data.user}
        name="user"
        id="user"
        placeholder="Nombre de usuario"
        setDataInput={setDataInput}
      />
      <Input
        value={data.password}
        name="password"
        id="password"
        placeholder="Contraseña"
        setDataInput={setDataInput}
      />
      <h2 className="register__info">
        Es posible que los usuarios de nuestro servicio hayan subido tu
        información de contacto en Instagram.
        <a
          className="register__info--link"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/help/instagram/261704639352628"
        >
          Más información
        </a>
      </h2>
      <h2 className="register__info">
        Al registrarte, aceptas nuestras{" "}
        <a
          className="register__info--link"
          target="_blank"
          rel="noreferrer"
          href="https://help.instagram.com/581066165581870/?locale=es_ES"
        >
          Condiciones.{" "}
        </a>
        Obtén más información sobre cómo recopilamos, usamos y compartimos tu
        información en la{" "}
        <a
          className="register__info--link"
          target="_blank"
          rel="noreferrer"
          href="https://help.instagram.com/581066165581870/?locale=es_ES"
        >
          Política de privacidad
        </a>
        , así como el uso que hacemos de las cookies y tecnologías similares en
        nuestra{" "}
        <a
          className="register__info--link"
          target="_blank"
          rel="noreferrer"
          href="https://help.instagram.com/581066165581870/?locale=es_ES"
        >
          Política de cookies.
        </a>
      </h2>
      <Button text={text}></Button>
    </fieldset>
  );
}

export default FormRegister;
