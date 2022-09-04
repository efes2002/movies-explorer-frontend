import React, {useEffect, useState} from 'react';
import './SearchForm.css'
import imgSearch from '../../images/find.png';

function SearchForm({ onSearch, checkbox = false, textSearch = ''}) {

  const [valueInput, setValueInput] = useState(textSearch);
  const [valueCheck, setValueCheck] = useState(checkbox);
  const [valuePlaceholder, setValuePlaceholder] = useState(textSearch);


  function handleChangeInputSearch(event) {
    setValueInput(event.target.value);
  }

  function handleChangeInputCheck() {
    setValueCheck(!valueCheck);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch({stateCheckbox: valueCheck, textSearch: valueInput});
  }

  useEffect(()=>{
    setValuePlaceholder(textSearch);
  }, [textSearch])

  return (
    <section className='search'>
      <form className='search__form-box' onSubmit={handleSubmit}>
        <input className='search__form'
               type='text' id='input1' name='input1'
               placeholder={valuePlaceholder}
               value={valueInput} onChange={handleChangeInputSearch}
               required/>
        <button className='search__button cursor-hover'>
          <img className='search__button-img' src={imgSearch} alt='Кнопка поиска'/>
        </button>
      </form>
      <div className='search__check cursor-hover'>
        <label className='search__checkbox'>
          <div className='search__checkbox-box cursor-hover'>
            <input className='search__checkbox-input' type="checkbox" onChange={handleChangeInputCheck}/>
            <span className={`search__checkbox-img1 ${valueCheck ? 'search__checkbox-input_checked': ''}`}>
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
