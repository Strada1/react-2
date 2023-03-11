import { useState, useEffect } from 'react'
import './App.css'
import { TaskHighInput } from './Components/TaskInput'
import { PRIORITIES, STATUS } from './Components/Elemets';
import HighList from './Components/HighList';

function App() {
  const [todos, setTodos] = useState((JSON.parse(localStorage.getItem('todos')) || []));
  const [highValue, setHighValue] = useState('');

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault();
    if(highValue !== '') {
      const newTask = {name: highValue, id: Date.now(), priority: PRIORITIES.LOW, status: STATUS.TO_DO, checked: false};
      setTodos([...todos, newTask]);
      setHighValue('');
    } else return 
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(function(item) {
      item.id !== id
    }))
  }


  return (
    <div>
      <div className="App">
      <h1>Todo</h1>
      <TaskHighInput getTask={addTodo} highInputValue={highValue} setHighValue={setHighValue}/>
      <HighList todos={todos} deleteTodo={deleteTodo}/>
    </div>
    </div>
  )
}

export default App

