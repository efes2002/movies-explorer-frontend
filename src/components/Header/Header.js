import React, {useEffect, useState} from 'react';
import './Header.css';
import MenuSingIn from './MenuSingIn/MenuSingIn';
import MenuLogin from './MenuLogin/MenuLogin';
import MenuBurger from './MenuBurger/MenuBurger';
import Logo from "../Logo/Logo";
import useWindowDimensions from '../../hoc/useWindowDimensions'
import {useLocation} from "react-router-dom";


function Header({ onOpenMenuPopup, theme }) {

  const { width } = useWindowDimensions();

  let location = useLocation();
  let menuSection = <MenuSingIn/>;



  if (location.pathname === '/') {
    menuSection = <MenuSingIn/>
  }
  if (location.pathname !== '/') {
    if (width >= 800) {
      menuSection = <MenuLogin/>
    }
    else{
      menuSection = <MenuBurger onOpenMenuPopup={onOpenMenuPopup}/>
    }
  }

  return (
    <header className={`header ${theme}`}>
      <Logo/>
      <div className='header__menu'>
        {menuSection}
      </div>
    </header>
  )
}

export default Header;
