import '../App.css'
import Check from "./Check"
import { BiTrash} from "react-icons/bi";


function ToDoItem({todo, handlerAdd, handlerDelete}){    
    return(
        <div className="ToDoItem">
            <div className='ToDo' onClick={() => handlerAdd(todo.id)}>
            <Check isCompleted={todo.isCompleted}/>
            

            <span className={`${todo.isCompleted ? 'descriptionDone' : 'description'}`}>
            {todo.description}
            </span>
            </div>
            
            <button className='trash' onClick={() => handlerDelete(todo.id)}>
                <BiTrash />
            </button>
        </div>
    )
}

export default ToDoItem