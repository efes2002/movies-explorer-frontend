import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs" name='techs'>
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__line"/>
      <h3 className="techs__text">7 технологий</h3>
      <div className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </div>
      <ul className="techs__list-techs">
        <li className="techs__list-techs-title">HTML</li>
        <li className="techs__list-techs-title">CSS</li>
        <li className="techs__list-techs-title">JS</li>
        <li className="techs__list-techs-title">React</li>
        <li className="techs__list-techs-title">Git</li>
        <li className="techs__list-techs-title">Express.js</li>
        <li className="techs__list-techs-title">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;
