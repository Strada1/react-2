import { useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { CurrentCityContext } from '../Weather';

function CheckForCities({Json, handlerAdd, cities, handlerDelete, handleSubmit}){
    const valueCity = useContext(CurrentCityContext)
    
    return(
    <div>

    <AiOutlineHeart 
    className={`${cities.find(elem => elem.name === Json.name) 
        ? 'likeChoice' 
        : 'like' }`}  
    onClick={() => cities.find(elem => elem.name === Json.name)
        ? handlerDelete(valueCity)
         : handlerAdd(valueCity)} />
   </div>
    )
   
   
}

export default CheckForCities