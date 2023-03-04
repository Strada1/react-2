/* eslint-disable space-before-function-paren */
import { React, useEffect, useState } from 'react'
import BlockTodo from './components/BlockTodo'
import Clear from './components/Clear'
import './App.css'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
  }

  const changeTodo = (id, status) => {
    setTodos(todos.map((item) => (item.id === id ? { ...item, status } : item)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const clearAllTodos = () => {
    setTodos([])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='container'>
      <div className='section-todo'>
        <Clear clearAllTodos={clearAllTodos} />
        <BlockTodo
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
          addTodo={addTodo}
          todos={todos}
          title='Высокий приоритет'
          priority='high'
        />
        <BlockTodo
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
          addTodo={addTodo}
          todos={todos}
          title='Низкий приоритет'
          priority='low'
        />
      </div>
    </div>
  )
}

export default App
