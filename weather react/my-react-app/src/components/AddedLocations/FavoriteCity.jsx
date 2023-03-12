import { useEffect, useContext } from "react";
import { CurrentCityContext } from '../Weather';

function FavoriteCity({city, handleSubmit, setCurrentCity, Json}){
    const valueCity = useContext(CurrentCityContext)
    
    function handleListSubmit(city){
        setCurrentCity(city);
    }
    
    useEffect(() =>{
        if(valueCity === city.name){

            handleSubmit();
        }
    }, [valueCity])

    return(
        <div>
            <p onClick={() => handleListSubmit(city.name)}>{city.name}</p>
        </div>
    )
}
export default FavoriteCity