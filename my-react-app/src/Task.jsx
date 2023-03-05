import React, { useEffect, useState } from 'react'

const Task = ({ id, task, status , deleteTodo}) => {
  const check = status === 'done'
  const [checked, setChecked] = useState(check)

  const getInputCheck = () => {
    setChecked(!checked)
  }

  const checkedStyle = {
    backgroundColor: '#dbdbdb',
  }
  return (
    <div className='item' style={checked ? checkedStyle : null}>
      <input
        defaultChecked={checked}
        onChange={getInputCheck}
        type='checkbox'
        id={id}
      />
      <label name={id}>
        {task}
          </label>
          <button onClick={() => deleteTodo(id)}>-</button>
    </div>
  )
}

export default Task