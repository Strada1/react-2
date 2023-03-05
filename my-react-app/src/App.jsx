import { useState } from 'react'
import './App.css'
import Header from './Header'
import List from './List'

function App() {
  const [todos, setTodo] = useState([{ id: 0, task: 'hi', status: 'todo' }])
  
  const addTodo = (todo) => {
    setTodo([...todos, todo])
  }
  const deleteTodo = (id) => {
    setTodo(todos.filter((item) => item.id !== id))
  }
  return (
    <div>
      <Header
        addTodo={addTodo}
        deleteTodo={deleteTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
      </div>
  )

}
export default App
