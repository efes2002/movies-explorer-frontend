import React from 'react';
import './MenuSingIn.css';
import {Link} from "react-router-dom";

function MenuSingIn() {
  return (
    <div className='header__menu-singin'>
      <Link to='/signup'>
        <p className='header__menu-singin-link-register'>Регистрация</p>
      </Link>
      <Link to='/signin'>
        <button className='header__menu-singin-button-singin cursor-hover'>Войти</button>
      </Link>
    </div>
  )
}

export default MenuSingIn;
