import { useState } from 'react'
import './App.css'
import Header from './Header'
import List from './List'
import storage from './storage'

function App() {
  const [todos, setTodo] = useState(storage.getCityFavoriteList()||[])
 
  const addTodo = (todo) => {
    setTodo([...todos, todo])
    storage.saveCityFavoriteList([...todos, todo])
  }
  const deleteTodo = (id) => {
    setTodo(todos.filter((item) => item.id !== id))
    storage.saveCityFavoriteList(todos.filter((item) => item.id !== id))
  }
  const changeChecking = (id) => {
    const newTodos = (todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
    }))
    setTodo(newTodos)
    storage.saveCityFavoriteList(newTodos)
  }
  return (
    <div>
      <Header
        addTodo={addTodo}
      />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        onChange={changeChecking}
      />
      </div>
  )
}
export default App
