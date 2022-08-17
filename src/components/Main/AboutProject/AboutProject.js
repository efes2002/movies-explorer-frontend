import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" name="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__line"/>
      <div className="about-project__description">
        <div className="about-project__article">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__article">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__stages">
        <div className="about-project__stages-title about-project__stages-first">1 неделя</div>
        <div className="about-project__stages-title about-project__stages-seconds">4 недели</div>
        <div className="about-project__stages-text">Back-end</div>
        <div className="about-project__stages-text">Front-end</div>
      </div>
    </section>
  )
}

export default AboutProject;
