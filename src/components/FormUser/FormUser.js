import React, {useEffect, useState} from 'react';
import './FormUser.css'
import logo from '../../images/logo.png'
import {useLocation, Link} from "react-router-dom";
import {FormValidator} from '../../utils/FormValidator'

function FormUser({onRegister, onLogin, submitError, onSubmitError}) {

  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');

  function handleInputNameChange(event) {
    onSubmitError('');
    const input = event.target;
    setValueName(input.value);
  }

  function handleInputEmailChange(event) {
    onSubmitError('');

    const input = event.target;
    setValueEmail(input.value);
  }

  function handleInputPasswordChange(event) {
    onSubmitError('');

    const input = event.target;
    setValuePassword(input.value);
  }

  let location = useLocation();
  let data;
  let elementForm;
  let onSubmit;

  const argumentNameElement = {
    labelForm: 'userName',
    title: 'Имя',
    inputArg: {
      id:"userName",
      type:"text",
      value: valueName,
      minLength:"3",
      onChange: handleInputNameChange
    }
  }

  const argumentEmailElement = {
    labelForm: 'userEmail',
    title: 'E-mail',
    inputArg: {
      id:"userEmail",
      type:"email",
      value: valueEmail,
      onChange: handleInputEmailChange
    }
  }

  const argumentPasswordElement = {
    labelForm: 'userPassword',
    title: 'Пароль',
    inputArg: {
      id:"userPassword",
      type:"password",
      value: valuePassword,
      onChange: handleInputPasswordChange
    }
  }

  function createInputElement({labelForm, title, inputArg}) {
    return <div className='form-user__form'>
      <label className='form-user__form-name' form={labelForm}>{title}</label>
      <input className='form-user__form-input'
             {...inputArg}
      />
      <p className='form-user__form-error'/>
    </div>
  }

  if (location.pathname === '/signin') {
    data = {
      title: 'Рады видеть!',
      buttonTitle: 'Войти',
      buttonSubtitle1: 'Ещё не зарегистрированы?',
      buttonSubtitle2: 'Регистрация',
      buttonSubtitleLink: '/signup',
    };

    onSubmit = () =>{
      onLogin({email: valueEmail, password: valuePassword});
    };

    elementForm =
      <>
        {createInputElement(argumentEmailElement)}
        {createInputElement(argumentPasswordElement)}
      </>;
  }

  if (location.pathname === '/signup') {

    data = {
      title: 'Добро пожаловать!',
      buttonTitle: 'Зарегистрироваться',
      buttonSubtitle1: 'Уже зарегистрированы?',
      buttonSubtitle2: 'Войти',
      buttonSubtitleLink: '/signin',
    };

    onSubmit = () => {
      onRegister({name: valueName, email: valueEmail, password: valuePassword});
    };

    elementForm = <>
      {createInputElement(argumentNameElement)}
      {createInputElement(argumentEmailElement)}
      {createInputElement(argumentPasswordElement)}
    </>;
  }

  useEffect(()=>{
    const popUpCardValidator = new FormValidator('form-user');
    popUpCardValidator.enableValidation();
  }, [])


  return (
    <form className='form-user' id='form-user' onSubmit={onSubmit}>
      <Link className='form-user__logo' to='/'>
        <img className='form-user__login-icon' src={logo} alt="Логотип"/>
      </Link>
      <h1 className='form-user__title'>{data.title}</h1>
      <div className='form-user__inputs'>
        {elementForm}
      </div>
      <button
        type="submit"
        className='form-user__button cursor-hover'
      >
        {data.buttonTitle}
        <p className='form-user__submit-error'>{submitError}</p>
      </button>
      <div className='form-user__link-box'>
        <p className='form-user__link-title'>{data.buttonSubtitle1}</p>
        <Link className='form-user__link-login' to={data.buttonSubtitleLink}>
          {data.buttonSubtitle2}
        </Link>
      </div>
    </form>
  )
}

export default FormUser;
