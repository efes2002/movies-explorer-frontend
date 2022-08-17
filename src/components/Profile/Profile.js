import React, {useContext, useState} from 'react';
import './Profile.css'
import Header from "../Header/Header";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile({onOpenMenuPopup}) {

  const currentUser = useContext(CurrentUserContext);
  const [valueName, setValueName] = useState(currentUser.name);
  const [valueEmail, setValueEmail] = useState(currentUser.email);

  function handleInputNameChange(event) {
    setValueName(event.target.value);
  }

  function handleInputEmailChange(event) {
    setValueEmail(event.target.value);
  }

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
            />
          </div>
        </div>
        <div className='profile__footer'>
          <div className='profile__footer-edit'>Редактировать</div>
          <div className='profile__footer-out'>Выйти из аккаунта</div>
        </div>
      </section>
    </div>
  )
}

export default Profile;
