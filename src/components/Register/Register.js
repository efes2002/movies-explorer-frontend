import React, {} from 'react';
import './Register.css'
import FormUser from "../FormUser/FormUser";

function Register({onRegister, submitError, onSubmitError}) {

  return (
    <div className='register'>
      <div className='register__box'>
        <FormUser onRegister={onRegister} submitError={submitError} onSubmitError={onSubmitError}/>
      </div>
    </div>
  )
}

export default Register;
