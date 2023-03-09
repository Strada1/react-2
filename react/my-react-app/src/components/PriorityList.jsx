import ToDoItem from "./ToDoItem"

function PriorityList({todos, handlerDelete, handlerAdd, priority}){
    
    
    return(
        <div>
			{/* {todos.map(todo => <ToDoItem todo={todo} key={todo.id} handlerAdd={handlerAdd} handlerDelete={handlerDelete} />)} */}
            {todos.map(todo => todo.priority === priority ? 
            <ToDoItem todo={todo} priority={priority} key={todo.id} handlerAdd={handlerAdd} handlerDelete={handlerDelete}/> 
            : '')}
		</div>
    )
}

export default PriorityList