import React from 'react';
import './Header.css';
import MenuSingIn from './MenuSingIn/MenuSingIn';
import MenuLogin from './MenuLogin/MenuLogin';
import MenuBurger from './MenuBurger/MenuBurger';
import MenuPopUp from "./MenuPopUp/MenuPopUp";
import Logo from "../Logo/Logo";


function Header({ onOpenMenuPopup, theme,  isOpen, onCloseMenuPopup }) {

  return (
    <header className={`header ${theme}`}>
      <Logo/>
      <div className='header__menu'>
        {false ? <MenuSingIn/> : <MenuBurger onOpenMenuPopup={onOpenMenuPopup}/>}
      </div>
      <MenuPopUp
        isOpen={isOpen}
        onCloseMenuPopup={onCloseMenuPopup}
      />
    </header>
  )
}

export default Header;
