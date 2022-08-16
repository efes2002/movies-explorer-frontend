import React from 'react';
import './MenuPopUp.css';
import iconX from '../../../images/icon-x.png'
import iconProfile from "../../../images/icon-profile.png";
import {Link} from "react-router-dom";

function MenuPopUp({ isOpen, onCloseMenuPopup}) {
  const open = isOpen ? 'popup_opened' : '';

  return (
    <div className={`header__menu-popup ${open}`}>
      <img className='header__menu-popup-icon-x' src={iconX} alt="Кнопка закрыть окно" onClick={onCloseMenuPopup}/>
      <ul className='header__menu-popup-navigation'>
        <li className='header__menu-popup-main header__menu-popup-link'>
          <Link className='header__menu-popup-link' to='/'>Главная</Link>
        </li>
        <li className='header__menu-popup-films header__menu-popup-link'>
          <Link className='header__menu-popup-link' to='/movies'>Фильмы</Link>
        </li>
        <li className='header__menu-popup-films-save header__menu-popup-link'>
          <Link className='header__menu-popup-link' to='/saved-movies'>Сохранённые фильмы</Link>
        </li>
      </ul>
      <div className='header__menu-popup-profile'>
        <p className='header__menu-popup-profile-link header__menu-popup-link'>
          <Link className='header__menu-popup-link' to='/profile'>Аккаунт</Link>
        </p>
        <div className='header__menu-popup-icon-box'>
          <img className='header__menu-popup-icon' src={iconProfile} alt="Логотип аккаунта"/>
        </div>
      </div>
    </div>
  )
}

export default MenuPopUp;
