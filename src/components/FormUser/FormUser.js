import React, {useState} from 'react';
import './FormUser.css'
import logo from '../../images/logo.png'
import {useLocation, Link} from "react-router-dom";

function FormUser() {

  const [valueName, setValueName] = useState('');
  const [isValidName, setValidityName] = useState(false);
  const [errorName, setErrorName] = useState('');

  const [valueEmail, setValueEmail] = useState('');
  const [isValidEmail, setValidityEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');

  const [valuePassword, setValuePassword] = useState('');
  const [isValidPassword, setValidityPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState('');

  function handleInputNameChange(event) {
    const input = event.target;
    setValueName(input.value);
    setValidityName(input.validity.valid);
    if (!isValidName) { setErrorName(input.validationMessage); }
    else { setErrorName(''); }
  }

  function handleInputEmailChange(event) {
    const input = event.target;
    setValueEmail(input.value);
    setValidityEmail(input.validity.valid);
    if (!isValidEmail) { setErrorEmail(input.validationMessage); }
    else { setErrorEmail(''); }
  }

  function handleInputPasswordChange(event) {
    const input = event.target;
    setValuePassword(input.value);
    setValidityPassword(input.validity.valid);
    if (!isValidPassword) { setErrorPassword(input.validationMessage); }
    else { setErrorPassword(''); }
  }


  let location = useLocation();
  let data;
  let elementForm;

  const registerData =
  {
    title: 'Добро пожаловать!',
    buttonTitle: 'Зарегистрироваться',
    buttonSubtitle1: 'Уже зарегистрированы?',
    buttonSubtitle2: 'Войти',
    buttonSubtitleLink: '/signin',
  }

  const loginData =
  {
    title: 'Рады видеть!',
    buttonTitle: 'Войти',
    buttonSubtitle1: 'Ещё не зарегистрированы?',
    buttonSubtitle2: 'Регистрация',
    buttonSubtitleLink: '/signup',
  }



  const elementUserName =
    <div className='form-user__form'>
      <label className='form-user__form-name' form="userName">Имя</label>
      <input className='form-user__form-input'
             id="userName"
             type="text"
             value={valueName}
             minLength="3"
             onChange={handleInputNameChange}
      />
      <p className='form-user__form-error'>{errorName}</p>
    </div>

  const elementUserEmail =
    <div className='form-user__form'>
      <label className='form-user__form-name' form="userEmail">E-mail</label>
      <input className='form-user__form-input'
             id="userEmail"
             type="email"
             value={valueEmail}
             onChange={handleInputEmailChange}
      />
       <p className='form-user__form-error'>{errorEmail}</p>
    </div>

  const elementUserPassword =
    <div className='form-user__form'>
      <label className='form-user__form-name' form="userPassword">Пароль</label>
      <input className='form-user__form-input form-user__input-password'
             id="userPassword"
             type="password"
             value={valuePassword}
             onChange={handleInputPasswordChange}
      />
      <p className='form-user__form-error'>{errorPassword}</p>
    </div>

  if (location.pathname === '/signin') {
    data = loginData
    elementForm =
      <>
        {elementUserEmail}
        {elementUserPassword}
      </>
  };

  if (location.pathname === '/signup') {
    data = registerData
    elementForm =
      <>
        {elementUserName}
        {elementUserEmail}
        {elementUserPassword}
      </>
  };

  return (
    <div className='form-user'>
      <Link className='form-user__logo' to='/'>
        <img className='form-user__login-icon' src={logo} alt="Логотип"/>
      </Link>
      <h1 className='form-user__title'>{data.title}</h1>
      <div className='form-user__inputs'>
        {elementForm}
      </div>
      <button type="button" className='form-user__button cursor-hover' disabled="">{data.buttonTitle}</button>
      <div className='form-user__link-box'>
        <p className='form-user__link-title'>{data.buttonSubtitle1}</p>
        <Link className='form-user__link-login' to={data.buttonSubtitleLink}>
          {data.buttonSubtitle2}
        </Link>
      </div>
    </div>
  )
}

export default FormUser;
