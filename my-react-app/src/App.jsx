import { useState , useEffect} from 'react'
import './App.css'
import Header from './Header'
import List from './List'

function App() {
  const storage = {
    saveCityFavoriteList: function (todosMas) {
      localStorage.setItem('List', JSON.stringify(Array.from(todosMas)));
    },
    getCityFavoriteList() {
      return JSON.parse(localStorage.getItem('List'));
    },
  }

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
    const newTodos =(todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !checked };
        }
        return todo;
    }))
    setTodo(newTodos);
  }
  return (
    <div>
      <Header
        addTodo={addTodo}
       stat={false}
      />
      <List todos={todos} deleteTodo={deleteTodo} onChange={changeChecking} />
      </div>
  )
}
export default App
