import "../styles/layout/button.scss";
import { Link } from "react-router-dom";
function Button({ text, toRouter }) {
  return (
    <>
      <Link className="button" to={toRouter}>
        {text}
      </Link>
    </>
  );
}

export default Button;
