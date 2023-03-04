/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ImgAdd from '../Images/ImgAdd'

const Form = ({ priority, addTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const placeholder = priority === 'high' ? 'важных ' : ''

  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const minLength = 2
    if (inputValue.length <= minLength) return
    addTodo({ id: String(Date.now()), task: inputValue, priority, status: 'todo' })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={getInputValue}
        className='new-high-item__text'
        type='item-text'
        placeholder={`Добавить ${placeholder}дел..`}
        id='input_high'
        value={inputValue}
      />
      <button type='submit' className='new-item_add'>
        <ImgAdd />
      </button>
    </form>
  )
}

export default Form
