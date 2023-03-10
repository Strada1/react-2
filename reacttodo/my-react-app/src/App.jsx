import { useState, useEffect } from 'react'
import storage from './storage'
import Header from './Header'
import List from './List'


function App() {
  const [todoList, setTodoList] = useState(storage.getTodos())
  const addTodo = (todo) => {
    setTodoList([...todoList, todo])
  }
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id))
  }
  const changeStatus = (id) => {
    setTodoList(
      todoList.map((item) =>
        (item.id === id ? { ...item, status: !item.status } : { ...item })))
  }
  useEffect(() => {
    storage.saveTodos(todoList);
  }, [todoList])


  return (
    <div className='todo'>
      <Header
        addTodo={addTodo} />
      <List
        todoList={todoList}
        onDelete={deleteTodo}
        onChange={changeStatus} />
    </div>
  )
}

export default App
