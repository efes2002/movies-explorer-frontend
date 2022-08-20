import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className='portfolio__work-title'>Портфолио</h3>
      <ul className='portfolio__work-list'>
        <li>
          <a className='portfolio__work-title-box' href='https://efes2002.github.io/russian-travel/'>
            <h4 className='portfolio__work-subtitle'>Статичный сайт</h4>
            <div className='portfolio__icon-str'>↗</div>
          </a>
        </li>
        <div className='portfolio__work-line'/>
        <li>
          <a className='portfolio__work-title-box' href='https://efes2002.github.io/mesto/'>
            <h4 className='portfolio__work-subtitle'>Адаптивный сайт</h4>
            <div className='portfolio__icon-str'>↗</div>
          </a>
        </li>
        <div className='portfolio__work-line'/>
        <li>
          <a className='portfolio__work-title-box' href='https://efes2002.students.nomoredomains.xyz '>
            <h4 className='portfolio__work-subtitle'>Одностраничное приложение</h4>
            <div className='portfolio__icon-str'>↗</div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
