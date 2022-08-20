import React, {useState} from 'react';
import './SearchForm.css'
import imgSearch from '../../../images/find.png';

function SearchForm() {
  const [valueInput, setValueInput] = useState('');
  const [valueCheck, setValueCheck] = useState(false);

  function handleChangeInputSearch(event) {
    setValueInput(event.target.value);
  }

  function handleChangeInputCheck() {
    setValueCheck(!valueCheck);
  }

  return (
    <section className='search'>
      <div className='search__form-box'>
        <input className='search__form'
               type='text' id='input1' name='input1'
               placeholder='Фильм'
               value={valueInput} onChange={handleChangeInputSearch}
               required/>
        <button className='search__button' type='submit'>
          <img className='search__button-img' src={imgSearch} alt='Кнопка поиска'/>
        </button>
      </div>
      <div className='search__check'>
        <label className='search__checkbox'>
          <div className='search__checkbox-box'>
            <input className='search__checkbox-input' type="checkbox" onChange={handleChangeInputCheck}/>
            <span className='search__checkbox-img1'>
            <span className='search__checkbox-img2'/>
          </span>
          </div>
          <p className='search__checkbox-title'>Короткометражки</p>
        </label>
      </div>

      <div className='search__line'/>
    </section>
  )
}

export default SearchForm;
