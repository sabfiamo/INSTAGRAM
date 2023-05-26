function FormEnter() {
  return (
    <fieldset className="user">
      <button className="enter__button" to="/">
        <i className="fa-brands fa-square-facebook enter__icon"></i> Continuar
        con Facebook
      </button>
      <div className="enter__line--container">
        <span className="enter__line"></span>
        <span>O</span>
        <span className="enter__line"></span>
      </div>
      <input
        type="text"
        className="user__input"
        value=""
        name="autor"
        id="autor"
        placeholder="Usuario"
      />

      <input
        type="text"
        className="user__input"
        value=""
        name="password"
        id="password"
        placeholder="Contraseña"
      />
      <label className="user__label">
        <input
          type="checkbox"
          name="storage"
          id="storage"
          value=""
          className="user__check"
        />
        Guardar datos de inicio de sesión
      </label>
      <h2 className="user__link">¿Has olvidado la contraseña?</h2>
      <button className="user__button" to="/">
        Entrar
      </button>
    </fieldset>
  );
}

export default FormEnter;
