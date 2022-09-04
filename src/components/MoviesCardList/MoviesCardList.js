import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import Placeholder from '../Preloader/Preloader'
import useWindowDimensions from "../../hoc/useWindowDimensions";
import {useLocation} from "react-router-dom";

function MoviesCardList({ movies, onDeleteSaveFilm, isPlaceholder,
                          onSaveFilm, errorMessage, onErrorMessage }) {

  let sizePage = 3, startPage = 1000;

  let location = useLocation();
  const { width } = useWindowDimensions()

  if (location.pathname === '/movies') {
    if (width >= 1280) {sizePage = 3; startPage = 12;};
    if (768 <= width && width < 1280) {sizePage = 2; startPage = 8;};
    if (width < 768) {sizePage = 1; startPage = 5;};
  }

  const [valueListMax, setValueListMax] = useState(startPage);

  const elementFilms = movies.map((movie, index) => {
    if (index < valueListMax) {
      return <MoviesCard
        key={index}
        movie={movie}
        onSaveFilm={onSaveFilm}
        onDeleteSaveFilm={onDeleteSaveFilm}/>
    }
    return null;
  })

  function handleChangeValueList(event) {
    if (movies.length < valueListMax + sizePage) {
      setValueListMax(valueListMax + sizePage);
      event.target.disabled = true;
      event.target.style = 'display: none'
    }
    else {
      setValueListMax(valueListMax + sizePage);
    }
  }

  useEffect(()=>{
    onErrorMessage(''); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    setValueListMax(startPage); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies])

  return (
    <section className='movies-list'>
      <div className='movies-list__list'>
        {isPlaceholder ? <Placeholder/> : elementFilms}
      </div>
      <div className='movies-list__next'>

        {(movies.length === 0) || (location.pathname === '/saved-movies')
          ? <>
            { errorMessage
              ? <p className='movies-list__error'>{errorMessage}</p>
              : <></>}</>
          : ((movies.length <= valueListMax) && (!isPlaceholder))
            ? <></>
            : <button
                type="button"
                className='movies-list__next-button cursor-hover'
                onClick={handleChangeValueList}
              >Ещё</button>
        }
      </div>
    </section>
  )
}

export default MoviesCardList;
