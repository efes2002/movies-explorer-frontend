import React from 'react';
import './MoviesCard.css'
import { useLocation } from 'react-router-dom';

function MoviesCard({ film, onSaveFilm, onDeleteSaveFilm}) {

  const {savedFilm, img, title, time} = film;
  let location = useLocation();

  function handleChangeSaveFilm() {
    onSaveFilm(film);
  }

  function handleChangeDeleteSaveFilm() {
    onDeleteSaveFilm(film);
  }

  let divButton;

  if (location.pathname === '/movies') {
    divButton = savedFilm
      ? <button className='movies-card__button-value-1-2' onClick={handleChangeDeleteSaveFilm}/>
      : <button className='movies-card__button-value-0-3' onClick={handleChangeSaveFilm}>Сохранить</button>
  }
  else {
    divButton = <button className='movies-card__button-value-0-2' onClick={handleChangeDeleteSaveFilm}/>
  }

  return (
    <div className='movies-card'>
      <img className='movies-card__img' src={img} alt="Фильм"/>
      <div className='movies-card__description'>
        <div className='movies-card__title-box'>
          <h3 className='movies-card__title'>{title}</h3>
        </div>
        <div className='movies-card__time'>{time}</div>
      </div>
      {divButton}
    </div>
  )
}

export default MoviesCard;
