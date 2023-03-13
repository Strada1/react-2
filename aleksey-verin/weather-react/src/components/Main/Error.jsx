/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { CitiesContext } from '../../App'

const Error = ({ handleError }) => {
  const { error } = useContext(CitiesContext)
  if (!error) return

  let message = ''
  if (error) {
    switch (error.error) {
      case '404':
        message = 'Город не найден. Введите другой город..'
        break
      case '400':
        message = 'Какая-то ошибка..'
        break
      default:
        message = 'Извините, ошибка сети. Попробуйте еще раз..'
        break
    }
  }

  return (
    <div className='error-block'>
      <div className='error-message'>{message}</div>
      <div onClick={() => handleError(null)} className='error-close'>
        <span>&#215;</span>
      </div>
    </div>
  )
}

export default Error
