import React, {useEffect} from 'react';
import {useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import MainApi from "../../utils/MainApi";
import './App.css'
import Main from '../Main/Main';
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import MenuPopUp from "../Header/MenuPopUp/MenuPopUp";
import Page404 from "../Page404/Page404";
import {optionsApi} from "../../utils/config";
import {RequireAuthRoute} from "../RequireAuthRoute/RequireAuthRoute";
import {LoggedInUserContext} from "../../contexts/LoggedInUserContext";
import {ClosedAuthorizedUsersRoute} from "../ClosedAuthorizedUsersRoute/ClosedAuthorizedUsersRoute";
import MoviesPage from "../MoviesPage/MoviesPage";


function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [sessionToken, setSessionToken] = useState(localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState({name: '', email: '', id: ''});
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');

  const mainApi = new MainApi({
    ...optionsApi,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionToken}`
    }
  });

  const handleEditUser = ({name, email}) => {
    handleUpdateUser({name, email});
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
        setCurrentUser({name: data.name, email: data.email, id: data._id});
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
          console.log('вы успешно зарегистрировались')
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
    setCurrentUser({name: '', email: '', id: ''});
    setLoggedIn(false);
    localStorage.removeItem('moviesLastSearch');
    navigate('/');
  }

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.validUser(token)
        .then((data) => {
            if (data.email) {
              setSessionToken(token);
              setLoggedIn(true);
              setCurrentUser({name: data.name, email: data.email, id: data._id});
              navigate(location.pathname);
            }
            else {
              setSessionToken(null);
              setLoggedIn(false);
              setCurrentUser({name: '', email: '', id: ''});
              navigate('/');
            }
          }
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    checkAuth(); // eslint-disable-next-line
  }, [loggedIn])

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
              <RequireAuthRoute>
                <MoviesPage
                  onOpenMenuPopup={handleMenuPopupClick}
                />
              </RequireAuthRoute>
            }/>
            <Route path="saved-movies" element={
              <RequireAuthRoute>
                <MoviesPage
                  onOpenMenuPopup={handleMenuPopupClick}
                />
              </RequireAuthRoute>
            }/>
            <Route path="signup" element={
              <ClosedAuthorizedUsersRoute>
                <Register
                  onRegister={onRegister}
                  submitError={submitErrorMessage}
                  onSubmitError={setSubmitErrorMessage}
                />
              </ClosedAuthorizedUsersRoute>
            }/>
            <Route path="signin" element={
              <ClosedAuthorizedUsersRoute>
                <Login
                  onLogin={onLogin}
                  submitError={submitErrorMessage}
                  onSubmitError={setSubmitErrorMessage}
                />
              </ClosedAuthorizedUsersRoute>
            }/>
            <Route path="profile" element={
              <RequireAuthRoute>
                  <Profile
                  loggedIn={loggedIn}
                  onOpenMenuPopup={handleMenuPopupClick}
                  onEditUser={handleEditUser}
                  onSignOut={onSignOut}
                  />
                </RequireAuthRoute>
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
