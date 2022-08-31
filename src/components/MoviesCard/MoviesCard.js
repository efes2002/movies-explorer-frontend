import React, {useState} from 'react';
import './MoviesCard.css'
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, onSaveFilm, onDeleteSaveFilm}) {

  const {image, nameRU, duration, savedMovie, trailerLink} = movie;

  console.log(movie)
  let location = useLocation();

  function handleChangeSaveFilm() {
    onSaveFilm(movie);
  }

  function handleChangeDeleteSaveFilm() {
    onDeleteSaveFilm(movie);
  }

  let divButton;

  if (location.pathname === '/movies') {

    divButton = savedMovie
      ? <button className='movies-card__button-value-1-2 cursor-hover' onClick={handleChangeDeleteSaveFilm}/>
      : <button className='movies-card__button-value-0-3 cursor-hover' onClick={handleChangeSaveFilm}>Сохранить</button>
  }
  else {
    divButton = <button className='movies-card__button-value-0-2 cursor-hover' onClick={handleChangeDeleteSaveFilm}/>
  }

  return (
    <div className='movies-card'>
      <a href={trailerLink} target="_blank">
        <img className='movies-card__img' src={image} alt={`Картинка для фильма: ${nameRU}`}/>
      </a>
      <div className='movies-card__description'>
        <div className='movies-card__title-box'>
          <h3 className='movies-card__title'>{nameRU}</h3>
        </div>
        <div className='movies-card__time'>{duration}</div>
      </div>
      {divButton}
    </div>
  )
}

export default MoviesCard;
