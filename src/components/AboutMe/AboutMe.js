import photo from "../../images/avatar.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="title about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__description-container">
          <h3 className="about-me__name">Герман</h3>
          <p className="about-me__description">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__text">
            Я решил стать веб-разработчиком, потому что мне нравится создавать
            что-то новое и видеть результат своей работы. Front-end разработка
            привлекает меня возможностью создавать удобные интерфейсы для
            пользователей.Сейчас я обучаюсь на курсах в Я.Практикуме на
            факультете веб-разработки. Также для самообучения смотрю видео по
            разработке сайтов и читаю учебник по JavaScript. Хобби: играю в
            компьютерные игры и читаю научную литературу.
          </p>
          <ul className="about-me__links">
            <li>
              <a
                className="about-me__link"
                href="https://www.linkedin.com/in/%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D0%BD-%D1%81%D0%BA%D0%BB%D1%8F%D1%80%D0%BE%D0%B2-2472b0239/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="about-me__link"
                href="https://github.com/GermanSklyarov"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="мое фото" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
