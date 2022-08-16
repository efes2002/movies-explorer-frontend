import React from 'react';
import './AboutMe.css';
import student from "../../../images/student.png";
import {Link} from "react-router-dom";

function AboutMe() {
  return (
    <section className="about-me" name='about'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__line'/>
      <div className='about-me__description'>
        <div className='about-mee__description-box-text'>
          <h3 className='about-me__description-name'>Виталий</h3>
          <p className='about-me__description-subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description-text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className='about-me__social'>
            <li className='about-me__social-link'><a className='about-me__social-url' href='https://www.Facebook.com'>Facebook</a></li>
            <li className='about-me__social-link'><a className='about-me__social-url' href='https://www.Github.com'>Github</a></li>
          </ul>
        </div>
        <div className='about-me__description-box-img'>
          <img className='about-me__img-student' src={student} alt="Фотография студента"/>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
