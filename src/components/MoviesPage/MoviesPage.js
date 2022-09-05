import React, {useContext, useEffect, useState} from 'react';
import {LoggedInUserContext} from "../../contexts/LoggedInUserContext";
import {useLocation} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import {optionsApi, optionsMoviesApi} from "../../utils/config";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";


function MoviesPage({onOpenMenuPopup}) {

  let elementPage;
  const location = useLocation();
  const moviesApi = new MoviesApi();

  const loggedIn = useContext(LoggedInUserContext);
  const currentUser = useContext(CurrentUserContext);

  const moviesLocalStorage = () => {
    return {
      getMovies() {
        if (localStorage.getItem('moviesLastSearch')) {
          const data = JSON.parse(localStorage.getItem('moviesLastSearch'));
          if (data.owner === currentUser.id ) {
            return data;
          }
        }
        else {
          localStorage.removeItem('moviesLastSearch');
          return null;
        }
      },
      setMovies({ stateCheckbox, textSearch, arrFilterMovies }) {
        localStorage.setItem(
          'moviesLastSearch',
          JSON.stringify(
            { owner: currentUser.id,
              stateCheckbox: stateCheckbox,
              textSearch: textSearch,
              arrFilterMovies: arrFilterMovies
            })
        );
      }
    }
  }

  const [isPlaceholder, setIsPlaceholder] = useState(false);
  const [movies, setMovies] = useState([]);
  const [statePageMovies, setStatePageMovies] = useState({
    owner: '',
    stateCheckbox: false,
    textSearch: '',
    arrFilterMovies: []
  })
  const [savedMovies, setSavedMovies] = useState([]);
  const [statePageSavedMovies, setStatePageSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const mainApi = new MainApi({
    ...optionsApi,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  const _filterFilms = (stateCheckbox, textSearch, arrMovies) => {
    const text = textSearch.toLowerCase();
    const time = stateCheckbox ? 40 : 1000;
    return arrMovies.filter((item) => {
      const nameRU = item.nameRU.toLowerCase();
      const description = item.description.toLowerCase();
      return ((nameRU.includes(text) || description.includes(text)) && (item.duration <= time))
    })
  }

  const _markedSavedMovies = (movies, savedMovies) => {
    movies.forEach((movie)=>{
      if (savedMovies.find(savedMovie => movie.movieId === savedMovie.movieId)) {
        movie.savedMovie = true;
      }
    })
    return movies
  }

  const _mutationUrlFilms = (films) => {
    const baseUrlMoviesApi = optionsMoviesApi.baseUrl;
    return films.map((film) => {
      let tpmUrl = film.image.url;
      let tpmThumbnail = film.image.formats.thumbnail.url;
      let tmpId = film.id;
      film.image = baseUrlMoviesApi + tpmUrl;
      film.thumbnail = baseUrlMoviesApi + tpmThumbnail;
      film.movieId = tmpId;
      film.savedMovie = false;
      return film;
    })
  }

  const handleSearchMovies = ({stateCheckbox, textSearch}) => {
    setErrorMessage('');
    setIsPlaceholder(true);
    if (movies.length === 0) {
      moviesApi.getMovies()
        .then((data) => {
          return [..._mutationUrlFilms(data)]
        })
        .then((item) => {
          setMovies(item);
          const savedMoviesData = {
            owner: currentUser.id,
            stateCheckbox: stateCheckbox,
            textSearch: textSearch,
            arrFilterMovies:
              _filterFilms(
                stateCheckbox,
                textSearch,
                _markedSavedMovies(item, savedMovies)
              )
          }
          moviesLocalStorage().setMovies(savedMoviesData)
          setStatePageMovies(savedMoviesData);
          if (savedMoviesData.arrFilterMovies.length === 0) {
            setErrorMessage('Ничего не найдено')
          } else {
            setErrorMessage('')
          }
          setIsPlaceholder(false);
        })
        .catch((err) => {
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
          setIsPlaceholder(false);
          console.log(err);
        });
    } else {
      const savedMoviesData = {
        owner: currentUser.id,
        stateCheckbox: stateCheckbox,
        textSearch: textSearch,
        arrFilterMovies:
          _filterFilms(
            stateCheckbox,
            textSearch,
            _markedSavedMovies(movies, savedMovies)
          )
      }
      moviesLocalStorage().setMovies(savedMoviesData)
      setStatePageMovies(savedMoviesData);
      if (savedMoviesData.arrFilterMovies.length === 0) {
        setErrorMessage('Ничего не найдено')
      } else {
        setErrorMessage('')
      }
      setIsPlaceholder(false);
    }
  }

  const handleSearchSavedMovies = ({stateCheckbox, textSearch}) => {
    if (savedMovies.length === 0) {
    } else {
      setStatePageSavedMovies(
        _filterFilms(
          stateCheckbox,
          textSearch,
          savedMovies
        ))
    }
  }

  const handleResetStatePageSaved = () => {
    setStatePageSavedMovies(savedMovies)
  }

  const handleSaveMovie = (movie) => {
    const checkSaveMovie = savedMovies.find(item => item.movieId === movie.movieId);
    if (!checkSaveMovie) {
      mainApi.addMovie(movie)
        .then((data) => {
          setStatePageSavedMovies([...savedMovies, data]);
          setSavedMovies([...savedMovies, data]);
          const savedMoviesData =  {
            ...moviesLocalStorage().getMovies(),
            arrFilterMovies: moviesLocalStorage().getMovies().arrFilterMovies.map((movie) => {
              if (movie.movieId === data.movieId) {
                movie.savedMovie = true
              }
              return movie;
            })
          }
          moviesLocalStorage().setMovies(savedMoviesData)
          setStatePageMovies(savedMoviesData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {console.log('Такой фильм уже сохранен')}
  }

  const handleDeleteMovie = (film) => {
    const deleteMovie = savedMovies.find((item) => film.movieId === item.movieId)
    mainApi.deleteMovie(deleteMovie._id)
      .then((data) => {
        const filterSavedMovies = savedMovies.filter((movie) => movie._id !== data._id);
        setSavedMovies(filterSavedMovies);
        setStatePageSavedMovies(filterSavedMovies);
        moviesLocalStorage().setMovies(
          {
            ...moviesLocalStorage().getMovies(),
            arrFilterMovies: moviesLocalStorage().getMovies().arrFilterMovies.map((movie) => {
              if (movie.movieId === data.movieId) {
                movie.savedMovie = false
              }
              return movie;
            })
          }
        )
        setStatePageMovies(moviesLocalStorage().getMovies());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (location.pathname === '/movies') {
    elementPage = <Movies
      onOpenMenuPopup={onOpenMenuPopup}
      errorMessage={errorMessage}
      savedMovies={savedMovies}
      movies={statePageMovies}
      onSaveFilm={handleSaveMovie}
      onDeleteSaveFilm={handleDeleteMovie}
      onSearch={handleSearchMovies}
      isPlaceholder={isPlaceholder}
      onErrorMessage={setErrorMessage}
    />
  }
  if (location.pathname === '/saved-movies') {
    elementPage = <SavedMovies
      onOpenMenuPopup={onOpenMenuPopup}
      errorMessage={errorMessage}
      onSearch={handleSearchSavedMovies}
      movies={statePageSavedMovies}
      onSaveFilm={handleSaveMovie}
      onDeleteSaveFilm={handleDeleteMovie}
      onReset={handleResetStatePageSaved}
      onErrorMessage={setErrorMessage}
    />
  }

  useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies()
        .then((data) => {
          setSavedMovies(data);
          setStatePageSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } // eslint-disable-next-line
  }, [loggedIn] )


  useEffect(()=>{
    if (moviesLocalStorage().getMovies()) {
      setStatePageMovies(moviesLocalStorage().getMovies());
    }
  }, [])

  return (
    <>
      {elementPage}
    </>
  )
}

export default MoviesPage;
