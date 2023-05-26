import Input from "../../components/Input";
function FormRegister({ data, setDataInput }) {
  return (
    <fieldset className="user">
      <button className="enter__button" to="/">
        <i className="fa-brands fa-square-facebook enter__icon"></i> Iniciar
        sesión con Facebook
      </button>
      <div className="enter__line--container">
        <span className="enter__line"></span>
        <span>O</span>
        <span className="enter__line"></span>
      </div>
      <Input
        value={data.mail}
        name="mail"
        id="mail"
        placeholder="Correo electrónico"
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
        placeholder="Usuario"
        setDataInput={setDataInput}
      />
      <Input
        value={data.password}
        name="password"
        id="password"
        placeholder="Contraseña"
        setDataInput={setDataInput}
      />
      <h2 className="user__info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        tempore, rem dolorum ipsa sit in voluptatem corporis recusandae sapiente
        ut amet, repellat suscipit ipsum, omnis doloribus. Dicta dolores officia
        neque.
      </h2>
      <button className="user__button" to="/">
        Siguiente
      </button>
    </fieldset>
  );
}

export default FormRegister;
