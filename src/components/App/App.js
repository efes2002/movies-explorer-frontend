import React from 'react';
import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import testFilms from '../../utils/testFilms'
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";


function App() {

  const [currentUser, setCurrentUser] = useState({name: 'Виталий', email: 'pochta@yandex.ru'});
  const [films, setFilms] = useState(testFilms);
  const [savedFilms, setSavedFilms] = useState(testFilms.filter((item) => item.savedFilm));

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const handleSaveFilm = (film) => {
    setFilms(films.map((item) => {
      if (item.id === film.id) {
        return {...film, savedFilm: true};
      }
      return item;
    }));
  }

  const handleDeleteSaveFilm = (film) => {
    const filmId = film.id;
    console.log(7, filmId)
    setFilms(films.map((item) => {
      if (item.id === filmId) {
        return {...film, savedFilm: false};
      }
      return item;
    }));
    setSavedFilms(savedFilms.filter((item) => item.id !== filmId));
    console.log(9, savedFilms)

  }

  const handleMenuPopupClick = () => {
    setIsMenuPopupOpen(true);
  }

  const closeMenuPopup = () => {
    setIsMenuPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={
            <Main
              onOpenMenuPopup={handleMenuPopupClick}
              isOpen={isMenuPopupOpen}
              onCloseMenuPopup={closeMenuPopup}
            />
          }/>
          <Route path="movies" element={
            <Movies
              onOpenMenuPopup={handleMenuPopupClick}
              isOpen={isMenuPopupOpen}
              onCloseMenuPopup={closeMenuPopup}
              films={films}
              onSaveFilm={handleSaveFilm}
              onDeleteSaveFilm={handleDeleteSaveFilm}
            />
          }/>
          <Route path="saved-movies" element={
            <SavedMovies
              onOpenMenuPopup={handleMenuPopupClick}
              isOpen={isMenuPopupOpen}
              onCloseMenuPopup={closeMenuPopup}
              films={savedFilms}
              onDeleteSaveFilm={handleDeleteSaveFilm}
            />
          }/>
          <Route path="signup" element={<Register/>}/>
          <Route path="signin" element={<Login/>}/>
          <Route path="profile" element={
            <Profile
              onOpenMenuPopup={handleMenuPopupClick}
              isOpen={isMenuPopupOpen}
              onCloseMenuPopup={closeMenuPopup}
            />
          }/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
