/* eslint-disable react/prop-types */
import React from 'react'

const Clear = ({ clearAllTodos }) => {
  return (
    <div className='block-clear'>
      <button onClick={clearAllTodos} className='button-clear'>
        Очистить всё
      </button>
    </div>
  )
}

export default Clear
