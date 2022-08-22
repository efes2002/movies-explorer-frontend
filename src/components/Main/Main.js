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

function Main({onOpenMenuPopup}) {
  return (
    <div className='content'>
      <Header
        onOpenMenuPopup={onOpenMenuPopup}
        theme='header_theme_sapphire'
      />
      <main>
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </div>
  )
}

export default Main;
