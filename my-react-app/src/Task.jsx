import { check } from 'prettier';
import React, { useState } from 'react'

const Task = ({ id, task,todos, status, deleteTodo, onChange}) => {
 
  return (
    <div className='item'>
      <input
        type="checkbox"
        checked={status}
        onChange={onChange}
        id={id}
        status={toString(status)}
      />
      <label name={id}>
        {task}
          </label>
          <button onClick={() => deleteTodo(id)}>-</button>
    </div>
  )
}

export default Task