function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <nav>
          <ul className="footer__links">
            <li>
              <a
                className="footer__link"
                href="https://practicum.yandex.ru/"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://github.com/GermanSklyarov"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://www.linkedin.com/in/%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD-%D1%81%D0%BA%D0%BB%D1%8F%D1%80%D0%BE%D0%B2-2472b0239/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
