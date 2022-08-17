function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <a
            href="https://github.com/GermanSklyarov/how-to-learn"
            target="_blank"
            className="portfolio__project-link"
          >
            <span className="portfolio__project-link-text">Статичный сайт</span>
            <span className="portfolio__project-link-icon"></span>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            href="https://github.com/GermanSklyarov/russian-travel"
            target="_blank"
            className="portfolio__project-link"
          >
            <span className="portfolio__project-link-text">
              Адаптивный сайт
            </span>
            <span className="portfolio__project-link-icon"></span>
          </a>
        </li>
        <li className="portfolio__project">
          <a
            href="https://github.com/GermanSklyarov/react-mesto-api-full"
            target="_blank"
            className="portfolio__project-link"
          >
            <span className="portfolio__project-link-text">
              Одностраничное приложение
            </span>
            <span className="portfolio__project-link-icon"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
