import React from 'react';
import './Main.css';
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main({onOpenMenuPopup, isOpen, onCloseMenuPopup}) {
  return (
    <main className='content'>
      <Header
        onOpenMenuPopup={onOpenMenuPopup}
        theme='header_theme_sapphire'
        isOpen={isOpen}
        onCloseMenuPopup={onCloseMenuPopup}
      />
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </main>
  )
}

export default Main;
