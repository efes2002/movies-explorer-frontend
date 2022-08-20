import React from 'react';
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({onOpenMenuPopup, films, onSaveFilm, onDeleteSaveFilm}) {
  return (
    <>
      <Header
        onOpenMenuPopup={onOpenMenuPopup}
        theme='header_theme_black'
      />
      <main>
        <SearchForm/>
        <MoviesCardList films={films} onSaveFilm={onSaveFilm} onDeleteSaveFilm={onDeleteSaveFilm}/>
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
