import "../styles/layout/button.scss";
function Button({ text }) {
  return (
    <>
      <button className="button" to="/">
        {text}
      </button>
    </>
  );
}

export default Button;
