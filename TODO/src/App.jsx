import { useState } from 'react'
import Input from './InputTaskComponent/Input'
import { PRIORITY, STATUS, ERRORS} from './Elements/elements';
import './TaskComponent/task.css'
import List from './ListComponent/List';
import { useEffect } from 'react';


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    const element = event.target.value;
    setInput(element);
  }

  const addTask = (event) => {
    event.preventDefault()
    if(input !== '') {
      const newTask = {name: input, status: STATUS.TO_DO, priority: PRIORITY.LOW, checked: false, id: Date.now()}
      setTodos([...todos, newTask]);
      setInput('');
    } else return
  }

  const deleteTodo = (id)=> {
    setTodos((prevState) => prevState.filter((item) => item.id !== id))
  }

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div>
      <form onSubmit={addTask}>
      <Input
      inputHandler = {inputHandler}
      value = {input}/>
      </form>
      <div>
        <List todos={todos} deleteTodo = {deleteTodo}/>
      </div>
    </div>
  )
}

export default App


