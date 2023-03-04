/* eslint-disable react/prop-types */
import React from 'react'
import Form from './BlockTodo/Form'
import ItemTodo from './BlockTodo/ItemTodo'

const BlockTodo = ({ title, priority, addTodo, todos, changeTodo, deleteTodo }) => {
  const todosPriority = todos.filter((item) => item.priority === priority)
  const todosStatusTodo = todosPriority.filter((item) => item.status === 'todo')
  const todosStatusDone = todosPriority.filter((item) => item.status === 'done')

  return (
    <div>
      <div className='title'>{title}</div>
      <div className='new-item'>
        <Form addTodo={addTodo} priority={priority} />
      </div>
      <div className='list-high'>
        {todosStatusTodo.map(({ id, task, status }) => (
          <ItemTodo
            key={id}
            id={id}
            task={task}
            status={status}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        {todosStatusDone.map(({ id, task, status }) => (
          <ItemTodo
            key={id}
            id={id}
            task={task}
            status={status}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default BlockTodo
