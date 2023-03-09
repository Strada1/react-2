import { useState } from "react"
import '../App.css'
import { BsPlus} from "react-icons/bs";

function CreateToDo({setTodos, priority}){

    const [description, setDescription] = useState('');

    function addTask(description){
		setTodos(prev =>[ {
			id: new Date(),
			description,
			isCompleted: false,
            priority: priority,
		}, ...prev,
	])
		setDescription('')
	}
    return(
        <div className="addTask">
            <input type="text" className="addInput"  placeholder="Add Task"
            onChange={e => setDescription(e.target.value)} 
            value={description} 
            onKeyPress={(e) => e.key === 'Enter' && addTask(description)}/>
    
            <button className="addButton" onClick={() => addTask(description)}>
                <BsPlus  size={20}/>
            </button>
        </div>
    )
}

export default CreateToDo