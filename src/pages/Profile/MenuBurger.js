import { Link } from "react-router-dom";
import "../../styles/layout/menuBurger.scss";

function MenuBurger({ btnState, handleClick }) {
  let toggleClassCheck = btnState ? " close" : " open";
  return (
    <nav className="menu">
      <ul className={`menu__list${toggleClassCheck}`}>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            Configuración
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            Tu actividad
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            Guardadas
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            Cambiar aspecto
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            Informar de un problema
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            Cambiar de cuenta
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/" onClick={handleClick}>
            Salir
          </Link>
        </li>
      </ul>
      <div className="menu__mas" onClick={handleClick}>
        <ul className={`menu__toggle${toggleClassCheck}`}>
          <span className="menu__burger"></span>
          <span className="menu__burger"></span>
          <span className="menu__burger"></span>
        </ul>
        <h2 className={`menu__mas--text${toggleClassCheck}`}>Más</h2>
      </div>
    </nav>
  );
}

export default MenuBurger;
