import React, {} from 'react';
import './Page404.css'
import {useNavigate} from "react-router-dom";

function Page404() {


  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <section className='page404'>
      <h1 className='page404__title'>404</h1>
      <h2 className='page404__subtitle'>Страница не найдена</h2>
      <a className='page404__link cursor-hover' onClick={handleClick}>Назад</a>
    </section>
  )
}

export default Page404;
