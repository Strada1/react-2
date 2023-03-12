function WeatherOnTime({ForecastJson, ForecastItem}){
    
    return(
        <div className="weatherOnTime">
                <div className="dateNtime">
                <p>{ForecastJson.list && <span> {`${ForecastItem.dt_txt}`}</span>}</p>
                <p className="time"></p>
            </div>
            <div className="tempNfeels">
                <div>
                <p>Temperature: {ForecastJson.list && <span> {`${Math.floor(ForecastItem.main.temp - 273)}`}</span>} </p>
                <p>Feels like: {ForecastJson.list && <span> {`${Math.floor(ForecastItem.main.feels_like - 273)}`}</span>}</p>
                </div>
                <div>
                <p>{ForecastJson.list && <span> {`${ForecastItem.weather[0].main}`}</span>}</p>
                {/* <img  class='iconWeather'src="./png/icons8-rain-96 1.png" alt=""> */}
                {ForecastJson.list &&  <img className="foreCastImg"  src={`https://openweathermap.org/img/wn/${ForecastItem.weather[0]['icon']}@4x.png`} alt="" />}
            </div>
            </div>
    </div>
    ) 
}

export default WeatherOnTime