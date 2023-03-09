import ChosenCity from "./ChosenCity/ChosenCity";

function Details({CurrentCity, Json}){
    
    return(
        <div id="2" className="details weather__tab">
                   
        <div className="aboutS">
       <ChosenCity Json={Json} CurrentCity={CurrentCity}/>
       {Json.main &&
       
        <div className="list_details">
            <li>Temperature: {`${Math.floor(Json.main.temp - 273)}`}</li>
            <li>Feels like: {`${Math.floor(Json.main.feels_like - 273)}`}</li>
            <li>Weather: {`${Json.weather[0].main}`}</li>
            <li>Sunrise: {`${new Date(Json.sys.sunrise * 1000).getHours()}:${new Date(Json.sys.sunrise * 1000).getMinutes()}`}</li>
            <li>Sunset: {`${new Date(Json.sys.sunset * 1000).getHours()}:${new Date(Json.sys.sunset * 1000).getMinutes()}`}</li>
        </div>
        }
    </div>
    
        </div>
    )
}
export default Details