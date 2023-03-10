import { useEffect } from "react"
import ChosenCityStorage from "./ChosenCityStorage"

function ChosenCity({Json, handleSubmit}){
    
    

    function useCurrentCity(){
      
        window.addEventListener('load',  handleSubmit)
      }
      
    return(
        <div className="chosenCity">
                    {useCurrentCity()}
            <p>{  Json && <span>{`${Json.name}` }</span> }</p>
             {/* <span>{Json.name && <span>{`${Json.name}`}</span>}</span> */}
        </div>
    )
}

export default ChosenCity