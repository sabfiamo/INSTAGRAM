function Header({ title, subtitle }) {
  return (
    <>
      <h1 className="enter__title">{title}</h1>
      <h2 className="enter__subtitle">{subtitle}</h2>
    </>
  );
}

export default Header;
