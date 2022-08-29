import React, {useContext, useEffect, useState} from 'react';
import './Profile.css'
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import {LoggedInUserContext} from "../../contexts/LoggedInUserContext";

function Profile({onOpenMenuPopup, onEditUser, onSignOut, currentUser}) {

  const [editActive, setEditActive] = useState(false);
  const loggedIn = useContext(LoggedInUserContext);

  const [valueName, setValueName] = useState(currentUser.name);
  const [valueEmail, setValueEmail] = useState('');

  function handleEditUser() {
    onEditUser({name: valueName, email: valueEmail});
    handleEditActive();
  }

  function handleInputNameChange(event) {
    setValueName(event.target.value);
  }

  function handleSignOut() {
    onSignOut();
  }

  function handleInputEmailChange(event) {
    setValueEmail(event.target.value);
  }

  function handleEditActive() {
    const elementInputName = document.getElementById('userName');
    const elementInputEmail = document.getElementById('userEmail');
    if (editActive) {
      elementInputName.disabled = true;
      elementInputEmail.disabled = true;
      setEditActive(false);
    }
    else {
      setEditActive(true);
      elementInputName.disabled = false;
      elementInputEmail.disabled = false;
    }
  }

  const elementButtonDisabledEdit =
    <div className='profile__footer'>
      <div className='profile__footer-edit cursor-hover' onClick={handleEditActive}>Редактировать</div>
      <Link to='/'>
        <div className='profile__footer-out cursor-hover' onClick={handleSignOut}>Выйти из аккаунта</div>
      </Link>
    </div>

  const elementButtonActiveEdit =
    <div className='profile__footer-button'>
      <button type="button" className='profile__button cursor-hover' onClick={handleEditUser}>Сохранить</button>
    </div>

  useEffect(()=>{
    setValueName(currentUser.name);
    setValueEmail(currentUser.email);
  }, [currentUser, loggedIn])

  return (
    <div className='profile'>
      <Header
        onOpenMenuPopup={onOpenMenuPopup}
        theme='header_theme_black'
      />
      <section className='profile__section'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <div className='profile__forms'>
          <div className='profile__form'>
            <label className='profile__form-name' form="userName">Имя</label>
            <input className='profile__form-input'
                   id="userName"
                   type="text"
                   value={valueName}
                   minLength="3"
                   onChange={handleInputNameChange}
                   disabled
            />
          </div>
          <div className='profile__line'/>
          <div className='profile__form'>
            <label className='profile__form-name' form="userEmail">E-mail</label>
            <input className='profile__form-input'
                   id="userEmail"
                   type="email"
                   value={valueEmail}
                   onChange={handleInputEmailChange}
                   disabled
            />
          </div>
        </div>
        {editActive ? elementButtonActiveEdit: elementButtonDisabledEdit}
      </section>
    </div>
  )
}

export default Profile;
