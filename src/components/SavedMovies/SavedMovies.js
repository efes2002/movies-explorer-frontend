import React from 'react';
import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({onOpenMenuPopup, isOpen, onCloseMenuPopup, films, onSaveFilm, onDeleteSaveFilm}) {
  return (
    <>
      <Header
        onOpenMenuPopup={onOpenMenuPopup}
        theme='header_theme_black'
        isOpen={isOpen}
        onCloseMenuPopup={onCloseMenuPopup}
      />
      <SearchForm/>
      <MoviesCardList films={films} onSaveFilm={onSaveFilm} onDeleteSaveFilm={onDeleteSaveFilm}/>
      <Footer/>
    </>
  )
}

export default SavedMovies;
