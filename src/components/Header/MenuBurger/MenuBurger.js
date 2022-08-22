import React from 'react';
import './MenuBurger.css';
import iconBurger from '../../../images/icon-burger-1.png'

function MenuBurger({ onOpenMenuPopup }) {
  return (
    <button className='header__menu-burger cursor-hover' onClick={onOpenMenuPopup}>
      <img className='header__menu-burger-icon' src={iconBurger} alt="Кнопка меню"/>
    </button>
  )
}

export default MenuBurger;
