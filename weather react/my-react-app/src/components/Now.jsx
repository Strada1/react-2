
import CheckForCities from "./AddedLocations/CheckForCities";
import ChosenCity from "./ChosenCity/ChosenCity";

function Now({Json, handlerAdd, cities, handlerDelete, handleSubmit}){
    
    return(
    <div id="1" className="now weather__tab -active">
        <div className="aboutS">
            <div className="temperature" id="temp">
            <p>{Json.main && <span>{`${Math.floor(Json.main.temp - 273)}`}</span>}</p>
            </div>
            <div className="imageTemp">
                {Json.main &&  <img  src={`https://openweathermap.org/img/wn/${Json.weather[0]['icon']}@4x.png`} alt="" />}
            
            </div>
            <div className="city" id="city">
                <ChosenCity Json={Json} handleSubmit={handleSubmit}/>
                <CheckForCities  handlerAdd={handlerAdd} handlerDelete={handlerDelete} cities={cities} Json={Json}/>
                
            </div>
        </div>
   
    </div>
    )
}
export default Now