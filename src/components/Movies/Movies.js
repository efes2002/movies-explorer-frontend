import React from 'react';
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ onOpenMenuPopup, movies, savedMovies,
                  onSaveFilm, onDeleteSaveFilm, onSearch,
                  isPlaceholder, errorMessage, onErrorMessage}) {

  return (
    <>
      <Header
        onOpenMenuPopup={onOpenMenuPopup}
        theme='header_theme_black'
      />
      <main>
        <SearchForm
          onSearch={onSearch}
          checkbox={movies.stateCheckbox}
          textSearch={movies.textSearch} />
        <MoviesCardList
          errorMessage={errorMessage}
          movies={movies.arrFilterMovies}
          savedFilms={savedMovies}
          onDeleteSaveFilm={onDeleteSaveFilm}
          isPlaceholder={isPlaceholder}
          onSaveFilm={onSaveFilm}
          onErrorMessage={onErrorMessage}
        />
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
