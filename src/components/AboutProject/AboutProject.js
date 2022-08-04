function AboutProject() {
  return (
    <section className="about-project" id={'about-project'}>
      <h2 className="title about-project__title">О проекте</h2>
      <div className="about-project__description-container">
        <div className="about-project__description">
          <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__duration">
        <div className="about-project__duration-backend">1 неделя</div>
        <div className="about-project__duration-frontend">4 недели</div>
        <span className="about-project__duration-caption">Back-end</span>
        <span className="about-project__duration-caption">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;