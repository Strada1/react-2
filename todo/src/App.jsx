import { useState, useEffect } from 'react'
import './App.css'
import { TaskInput } from './Components/TaskInput'
import { PRIORITIES, STATUS } from './Components/Elemets';
import {HighList, LowList} from './Components/HighList';

function App() {
  const [todos, setTodos] = useState((JSON.parse(localStorage.getItem('todos')) || []));
  const [highValue, setHighValue] = useState('');
  const [lowValue, setLowValue] = useState('');

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const addTodo = (event, prior, value) => {
    event.preventDefault();
    if(prior === 'high') {
      const newTask = {name: value, id: Date.now(), priority: PRIORITIES.HIGH, status: STATUS.TO_DO, checked: false};
      setTodos([...todos, newTask]);
      setHighValue('');
    } else if(prior === 'low') {
      const newTask = {name: value, id: Date.now(), priority: PRIORITIES.LOW, status: STATUS.TO_DO, checked: false};
      setTodos([...todos, newTask]);
      setLowValue('');
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(function(item) {
      return item.id !== id
    }))
  }

  const changeStatus = (id) => {
    setTodos(todos.map((todo)=> todo.id === id ? {...todo, checked: !todo.checked, status: todo.checked ? STATUS.TO_DO : STATUS.DONE} : todo))
  }

  return (
    <div>
      <div className="App">
      <h1>Todo</h1>
      <TaskInput getTask={()=> addTodo(event, PRIORITIES.HIGH, highValue)} InputValue={highValue} setValue={setHighValue}/>
      <HighList todos={todos} deleteTodo={deleteTodo} statusChange = {changeStatus}/>
      <TaskInput getTask={()=> addTodo(event, PRIORITIES.LOW, lowValue)} InputValue={lowValue} setValue={setLowValue}/>
      <LowList todos={todos} deleteTodo={deleteTodo} statusChange = {changeStatus}/>
    </div>
    </div>
  )
}

export default App

