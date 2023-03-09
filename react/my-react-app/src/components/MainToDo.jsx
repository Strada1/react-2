import { useState, useEffect } from "react"
import CreateToDo from "./CreateToDo"
import PriorityList from "./PriorityList"
import Storage from "./Storage"
import useScreen from "./useScreen"

function MainToDo() {

	const [todos, setTodos] = useState(Storage.get());
	
	const{width, isDesktop, isMobile} = useScreen();

	const PRIORITIES = {
		HIGH: 'High', 
		LOW : 'Low'
	}

	useEffect(() => {
        Storage.set(todos);
    },[todos])
	
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
			<h1 className="heading">HIGH IMPORTANCE</h1>
		<CreateToDo priority={PRIORITIES.HIGH} setTodos={setTodos}/>
		<PriorityList priority={PRIORITIES.HIGH} todos={todos} handlerAdd={handlerAdd} handlerDelete={handlerDelete}/>
			<h1 className="heading">LOW IMPORTANCE</h1>
		<CreateToDo priority={PRIORITIES.LOW} setTodos={setTodos}/>
		<PriorityList priority={PRIORITIES.LOW} todos={todos} handlerAdd={handlerAdd} handlerDelete={handlerDelete}/>

		<div>
			<p>{width} px</p>
			<p> isDesktop: {String(isDesktop)}</p>
			<p> isMobile: {String(isMobile)}</p>
		</div>
		
		</div>
		
	)
}

export default MainToDo