import { BsPlus} from "react-icons/bs";
import '../App.css'

function CreateLowToDo({setDescription, description}){
    return(
        <div className="addTask">
            <input type="text" className="addInput"  placeholder="Add Low Task"
            onChange={e => setDescription(e.target.value)} 
            value={description} 
            />

            <button className="addButton">
                <BsPlus  size={20}/>
            </button>                                             
        </div>              
    )
}

export default CreateLowToDo