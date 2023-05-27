import "../styles/layout/header.scss";
import instagram from "../images/instagram.png";
function Header({ title, subtitle }) {
  return (
    <>
      <img className="header__title" src={instagram} alt="Instagram" />
      <h2 className="header__subtitle">{subtitle}</h2>
    </>
  );
}

export default Header;
