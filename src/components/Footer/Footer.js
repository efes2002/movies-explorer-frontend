import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__line'/>
      <div className='footer__menu'>
        <div className='footer__copyright'>© 2020</div>
        <ul className='footer__menu-link'>
          <li className='footer__link'>
            <a className='footer__url'
               href='https://practicum.yandex.ru'
               target="_blank"
               rel="noopener noreferrer">Яндекс.Практикум</a>
          </li>
          <li className='footer__link'>
            <a className='footer__url'
               href='https://www.Github.com'
               target="_blank"
               rel="noopener noreferrer">Github</a>
          </li>
          <li className='footer__link'>
            <a className='footer__url'
               href='https://www.Facebook.com'
               target="_blank"
               rel="noopener noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
