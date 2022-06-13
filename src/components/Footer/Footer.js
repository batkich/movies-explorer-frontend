import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__line"></div>
      <div className="footer-box">
        <p className="footer-box__year">© 2022</p>
        <ul className="footer-links">
          <li className="footer-links__cell">
            <a
              className="footer-links__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer-links__cell">
            <a className="footer-links__link" href="https://github.com/" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li className="footer-links__cell">
            <a className="footer-links__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
