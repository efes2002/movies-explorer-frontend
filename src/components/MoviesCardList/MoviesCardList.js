import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ films, onSaveFilm, onDeleteSaveFilm }) {

  const [valueListMax, setValueListMax] = useState(12);

  const elementFilms = films.map((item, index) => {
    if (index < valueListMax) {
      return <MoviesCard key={item.id} film={item} onSaveFilm={onSaveFilm} onDeleteSaveFilm={onDeleteSaveFilm}/>
    }
    return null;
  })

  function handleChangeValueList(event) {
    if (films.length < valueListMax+12) {
      setValueListMax(valueListMax+12);
      event.target.disabled = true;
    }
    else {
      setValueListMax(valueListMax+12);
    }
  }

  useEffect(()=>{}, [films])

  return (
    <section className='movies-list'>
      <div className='movies-list__list'>
        {elementFilms}
      </div>
      <div className='movies-list__next'>
        <button className='movies-list__next-button' onClick={handleChangeValueList}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
