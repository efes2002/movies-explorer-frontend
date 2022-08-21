import React from 'react';
import './MenuPopUp.css';
import iconX from '../../../images/icon-x.png'
import iconProfile from "../../../images/icon-profile.png";
import {Link, useLocation} from "react-router-dom";
import Popup from "../../Popup/Popup";

function MenuPopUp({ isOpen, onCloseMenuPopup}) {



  let location = useLocation();
  let styleActiveMovies = '';
  let styleActiveSavMovies = '';

  if (location.pathname === '/movies') {
    styleActiveMovies = 'header__link_active-768-320';
  };
  if (location.pathname === '/saved-movies') {
    styleActiveSavMovies = 'header__link_active-768-320';
  };


  return (
    <Popup
      isOpen={isOpen}
      onClose={onCloseMenuPopup}
    >
      <div className={`header__menu-popup`}>
        <img className='header__menu-popup-icon-x' src={iconX} alt="Кнопка закрыть окно" onClick={onCloseMenuPopup}/>
        <ul className='header__menu-popup-navigation'>
          <li className='header__menu-popup-main header__menu-popup-link'>
            <Link className='header__menu-popup-link' to='/' onClick={onCloseMenuPopup}>Главная</Link>
          </li>
          <li className={`header__menu-popup-films header__menu-popup-link ${styleActiveMovies}`}>
            <Link className='header__menu-popup-link' to='/movies' onClick={onCloseMenuPopup}>Фильмы</Link>
          </li>
          <li className={`header__menu-popup-films header__menu-popup-link ${styleActiveSavMovies}`}>
            <Link className='header__menu-popup-link' to='/saved-movies' onClick={onCloseMenuPopup}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <div className='header__menu-popup-profile'>
          <p className='header__menu-popup-profile-link header__menu-popup-link'>
            <Link className='header__menu-popup-link' to='/profile' onClick={onCloseMenuPopup}>Аккаунт</Link>
          </p>
          <div className='header__menu-popup-icon-box'>
            <img className='header__menu-popup-icon' src={iconProfile} alt="Логотип аккаунта"/>
          </div>
        </div>
      </div>
    </Popup>

  )
}

export default MenuPopUp;
