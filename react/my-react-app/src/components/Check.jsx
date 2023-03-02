import { BiCheck } from "react-icons/bi";
import '../App.css'


function Check({isCompleted}){
    
    return(
    <div className="Check">
        {isCompleted &&
        <BiCheck size={20} className="CheckItem"/>
        }
    </div>
    )
}

export default Check