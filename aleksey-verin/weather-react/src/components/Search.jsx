/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ImgSearch from './Images/ImgSearch'

const Search = ({ requestCity, handleError }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputValue.trim().length < 3) return
    requestCity(inputValue)
    setInputValue('')
  }

  return (
    <div className='section-search'>
      <form onSubmit={handleSubmit} className='form-search' action='#'>
        <input
          onChange={handleInput}
          className='input-search'
          type='text'
          placeholder='Введите название города..'
          value={inputValue}
        />
        <button type='submit' className='button-search'>
          <ImgSearch />
        </button>
      </form>
    </div>
  )
}

export default Search
