import React, {useEffect} from 'react';
import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({onOpenMenuPopup, movies, onSaveFilm,
                       onSearch, onDeleteSaveFilm, errorMessage,
                       onReset, onErrorMessage}) {

  useEffect(()=>{
    return () => {
      onReset();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header
        onOpenMenuPopup={onOpenMenuPopup}
        theme='header_theme_black'
      />
      <main>
        <SearchForm
          onSearch={onSearch}/>
        <MoviesCardList
          errorMessage={errorMessage}
          movies={movies}
          onSaveFilm={onSaveFilm}
          onDeleteSaveFilm={onDeleteSaveFilm}
          onErrorMessage={onErrorMessage}
        />
      </main>
      <Footer/>
    </>
  )
}

export default SavedMovies;
