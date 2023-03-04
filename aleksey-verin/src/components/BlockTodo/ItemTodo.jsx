/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import ImgClose from '../Images/ImgClose'

const ItemTodo = ({ id, task, status, changeTodo, deleteTodo }) => {
  const check = status === 'done'
  const [checked, setChecked] = useState(check)

  const getInputCheck = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    const status = checked ? 'done' : 'todo'
    changeTodo(id, status)
  }, [checked])

  const checkedStyle = {
    backgroundColor: '#dbdbdb',
  }

  return (
    <div className='item' style={checked ? checkedStyle : null}>
      <input
        defaultChecked={checked}
        onChange={getInputCheck}
        className='item-check'
        type='checkbox'
        id={id}
      />
      <label htmlFor={id} className='item-text'>
        {task}
      </label>
      <div onClick={() => deleteTodo(id)} className='item-close'>
        <ImgClose />
      </div>
    </div>
  )
}

export default ItemTodo
