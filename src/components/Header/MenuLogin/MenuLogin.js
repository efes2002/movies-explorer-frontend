import React from 'react';
import './MenuLogin.css';
import iconProfile from "../../../images/icon-profile.png";
import {Link, useLocation} from "react-router-dom";

function MenuLogin() {


  let location = useLocation();
  let styleActiveMovies = '';
  let styleActiveSavMovies = '';

  if (location.pathname === '/movies') {
    styleActiveMovies = 'header__link_active-1280';
  };
  if (location.pathname === '/saved-movies') {
    styleActiveSavMovies = 'header__link_active-1280';
  };


  return (
    <nav className='header__menu-login'>
      <div className='header__menu-login-navigation'>
        <Link to='/movies'>
          <p className={`header__menu-login-link ${styleActiveMovies}`}>Фильмы</p>
        </Link>
        <Link to='/saved-movies'>
          <p className={`header__menu-login-link ${styleActiveSavMovies}`}>Сохранённые фильмы</p>
        </Link>
      </div>
      <div className='header__menu-login-profile'>
        <Link to='/profile'>
          <p className='header__menu-login-link header__menu-login-profile-link'>Аккаунт</p>
        </Link>
        <div className='header__menu-login-icon-box'>
          <img className='header__menu-login-icon' src={iconProfile} alt="Логотип аккаунта"/>
        </div>
      </div>
    </nav>
  )
}

export default MenuLogin;

