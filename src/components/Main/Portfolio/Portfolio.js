import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className='portfolio__work-title'>Портфолио</h3>
      <div className='portfolio__work-title-box'>
        <h4 className='portfolio__work-subtitle'>Статичный сайт</h4>
        <div className='portfolio__icon-str'>↗</div>
      </div>
      <div className='portfolio__work-line'/>
      <div className='portfolio__work-title-box'>
        <h4 className='portfolio__work-subtitle'>Адаптивный сайт</h4>
        <div className='portfolio__icon-str'>↗</div>
      </div>
      <div className='portfolio__work-line'/>
      <div className='portfolio__work-title-box'>
        <h4 className='portfolio__work-subtitle'>Одностраничное приложение</h4>
        <div className='portfolio__icon-str'>↗</div>
      </div>
    </section>
  )
}

export default Portfolio;
