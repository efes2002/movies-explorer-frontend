import React from 'react';
import './Promo.css';
import imgPromo from "../../../images/img-promo.png";

function Promo() {
  return (
    <section className="promo">
      <img className='promo__img' src={imgPromo} alt="Картинка с изображением буквы П"/>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  )
}

export default Promo;
