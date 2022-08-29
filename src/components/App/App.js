import React, {useEffect} from 'react';
import {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import './App.css'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {LoggedInUserContext} from "../../contexts/LoggedInUserContext";
import MenuPopUp from "../Header/MenuPopUp/MenuPopUp";
import Page404 from "../Page404/Page404";
import {optionsApi} from "../../utils/config";
import {optionsMoviesApi} from '../../utils/config'


function App() {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [sessionToken, setSessionToken] = useState(localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState({name: '', email: ''});
  const [isPlaceholder, setIsPlaceholder] = useState(false);

  const [movies, setMovies] = useState([]);
  const [statePageMovies, setStatePageMovies] = useState({stateCheckbox: false, textSearch: '', arrFilterMovies: []})
  const [savedMovies, setSavedMovies] = useState([]);
  const [statePageSavedMovies, setStatePageSavedMovies] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);

  const mainApi = new MainApi({
    ...optionsApi,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionToken}`
    }
  });
  const moviesApi = new MoviesApi();

  const handleEditUser = ({name, email}) => {
    handleUpdateUser({name, email});
  }

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
    savedMovies.forEach((savedMovie) => {
      movies.forEach((movie) => {
        if (savedMovie.movieId === movie.movieId) {
          movie.savedMovie = true;
        } else {
          movie.savedMovie = false
        }
      })
    })
    return movies;
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
          setStatePageMovies({
            stateCheckbox: stateCheckbox,
            textSearch: textSearch,
            arrFilterMovies:
              _filterFilms(
                stateCheckbox,
                textSearch,
                _markedSavedMovies(item, savedMovies)
              )
          })
          if (statePageMovies.arrFilterMovies.length === 0) {
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
      setStatePageMovies({
        stateCheckbox: stateCheckbox,
        textSearch: textSearch,
        arrFilterMovies:
          _filterFilms(
            stateCheckbox,
            textSearch,
            _markedSavedMovies(movies, savedMovies)
          )
      })
      if (statePageMovies.arrFilterMovies.length === 0) {
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
    mainApi.addMovie(movie)
      .then((data) => {
        setStatePageSavedMovies([...savedMovies, data]);
        setSavedMovies([...savedMovies, data]);
        setStatePageMovies({
          ...statePageMovies,
          arrFilterMovies: statePageMovies.arrFilterMovies.map((movie) => {
            if (movie.movieId === data.movieId) {
              movie.savedMovie = true
            }
            return movie;
          })
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleDeleteMovie = (film) => {
    const deleteMovie = savedMovies.find((item) => film.movieId === item.movieId)
    mainApi.deleteMovie(deleteMovie._id)
      .then((data) => {
        const filterSavedMovies = savedMovies.filter((movie) => movie._id !== data._id);
        setSavedMovies(filterSavedMovies);
        setStatePageSavedMovies(filterSavedMovies);
        setStatePageMovies({
          ...statePageMovies,
          arrFilterMovies: statePageMovies.arrFilterMovies.map((movie) => {
            if (movie.movieId === data.movieId) {
              movie.savedMovie = false
            }
            return movie;
          })
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleMenuPopupClick = () => {
    setIsMenuPopupOpen(true);
  }

  const closeMenuPopup = () => {
    setIsMenuPopupOpen(false);
  }

  const handleUpdateUser = ({name, email}) => {
    mainApi.editProfile({name, email})
      .then((data) => {
        setCurrentUser({name: data.name, email: data.email});
      })
      .then(() => {
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onLogin = ({email, password}) => {
    mainApi.authUser({email: email, password: password})
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          const token = data.token;
          localStorage.setItem('token', token);
          setSessionToken(token);
          navigate('/movies');
        } else {
          console.log('Что-то пошло не так! Попробуйте ещё раз.')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onRegister = ({name, email, password}) => {
    mainApi.addNewUser({name: name, email: email, password: password})
      .then((data) => {
        if (data) {
          console.log(data, 'вы успешно зарегистрировались')
          onLogin({email: email, password: password})
        } else {
          setSubmitErrorMessage('Что-то пошло не так! Попробуйте ещё раз.');
          console.log('Что-то пошло не так! Попробуйте ещё раз.')
        }
      })
      .catch((err) => {
        setSubmitErrorMessage(err);
        console.log(err);
      });
  }

  const onSignOut = () => {
    localStorage.removeItem('token');
    setSessionToken('');
    setCurrentUser({name: '', email: ''});
    setLoggedIn(false);
    navigate('/');
  }

  // Аунтификация пользователя
  useEffect(() => {
    const token = localStorage.getItem('token');
      if (token) {
        setSessionToken(token);
        mainApi.validUser(token)
          .then((data) => {
              if (data.email) {
                setLoggedIn(true);
                setCurrentUser({name: data.name, email: data.email});
              }
            }
          )
          .catch((err) => {
            console.log(err);
          });
      } // eslint-disable-next-line
  }, [sessionToken])

 // Загрузка сохраненых фильмов и пользователя
  useEffect(() => {
    setSubmitErrorMessage('');
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInUserContext.Provider value={loggedIn}>
        <div className="page">
          <Routes>
            <Route path="/" element={
              <Main
                onOpenMenuPopup={handleMenuPopupClick}
              />
            }/>
            <Route path="movies" element={
              <Movies
                onOpenMenuPopup={handleMenuPopupClick}
                errorMessage={errorMessage}
                savedMovies={savedMovies}
                movies={statePageMovies}
                onSaveFilm={handleSaveMovie}
                onDeleteSaveFilm={handleDeleteMovie}
                onSearch={handleSearchMovies}
                isPlaceholder={isPlaceholder}
                onErrorMessage={setErrorMessage}
              />
            }/>
            <Route path="saved-movies" element={
              <SavedMovies
                onOpenMenuPopup={handleMenuPopupClick}
                errorMessage={errorMessage}
                onSearch={handleSearchSavedMovies}
                movies={statePageSavedMovies}
                onSaveFilm={handleSaveMovie}
                onDeleteSaveFilm={handleDeleteMovie}
                onReset={handleResetStatePageSaved}
                onErrorMessage={setErrorMessage}
              />
            }/>
            <Route path="signup" element={
              <Register
                onRegister={onRegister}
                submitError={submitErrorMessage}
                onSubmitError={setSubmitErrorMessage}
              />
            }/>
            <Route path="signin" element={
              <Login
                onLogin={onLogin}
                submitError={submitErrorMessage}
                onSubmitError={setSubmitErrorMessage}
              />
            }/>
            <Route path="profile" element={
              <Profile
                loggedIn={loggedIn}
                onOpenMenuPopup={handleMenuPopupClick}
                onEditUser={handleEditUser}
                onSignOut={onSignOut}
                currentUser={currentUser}
              />
            }/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </div>
        <MenuPopUp
          isOpen={isMenuPopupOpen}
          onCloseMenuPopup={closeMenuPopup}
        />
      </LoggedInUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
