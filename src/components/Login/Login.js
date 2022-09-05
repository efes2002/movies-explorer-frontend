import React, {} from 'react';
import './Login.css'
import FormUser from "../FormUser/FormUser";

function Login({ onLogin, submitError, onSubmitError }) {

  return (
    <div className='login'>
      <div className='login__box'>
        <FormUser
          onLogin={onLogin}
          submitError={submitError}
          onSubmitError={onSubmitError}
        />
      </div>
    </div>
  )
}

export default Login;
