import { useState } from "react"
import ToDoItem from "./ToDoItem"
import CreateToDo from "./CreateToDo"
import CreateLowToDo from "./CreateLowToDo"

const data = [

]

const dataLow = [
	{
		id: 1231231,
		description: 'Make a video',
		isCompleted: false,
	},
	{
		id: 123124556231,
		description: 'Make a book',
		isCompleted: false,
	}
]

function MainToDo() {

	const [todos, setTodos] = useState(data)
	
	function handlerAdd(id){
		const copyTodos = [...todos];
		const current = copyTodos.find(elem => elem.id === id)
		current.isCompleted = !current.isCompleted;
		setTodos(copyTodos)

	}
	
	
	function handlerDelete(id){
	
		setTodos([...todos].filter(elem => elem.id !== id))

	}



	return(
		<div>
		<CreateToDo setTodos={setTodos}/>
		<div>
			{todos.map(todo => <ToDoItem  todo={todo} key={todo.id} handlerAdd={handlerAdd} handlerDelete={handlerDelete} />)}
		</div>
		<CreateLowToDo/>
		<div>
			{dataLow.map(todo => <ToDoItem  todo={todo} key={todo.id} handlerAdd={handlerAdd} handlerDelete={handlerDelete} />)}
		</div>
		</div>
	)
}

export default MainToDo