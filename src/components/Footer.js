import "../styles/layout/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Made by Mónica</p>
        <a
          href="https://github.com/sabfiamo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/monica-saborido/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
