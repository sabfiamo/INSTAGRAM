import instagram from "../../images/instagram.png";
import MenuBurger from "./MenuBurger";
function Menu({ btnState, handleClick }) {
  return (
    <div className="profile__menu">
      <img className="profile__instagram" src={instagram} alt="Instagram" />
      <ul className="profile__list">
        <li className="profile__list--item bold">Inicio</li>
        <li className="profile__list--item">Búsqueda</li>
        <li className="profile__list--item">Explorar</li>
        <li className="profile__list--item">Reels</li>
        <li className="profile__list--item">Mensajes</li>
        <li className="profile__list--item">Notificaciones</li>
        <li className="profile__list--item">Crear</li>
        <li className="profile__list--item">Perfil</li>
      </ul>
      <MenuBurger btnState={btnState} handleClick={handleClick}></MenuBurger>
    </div>
  );
}

export default Menu;
