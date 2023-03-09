function WeatherOnTime(){
    return(
        <div className="weatherOnTime">
                <div className="dateNtime">
                <p>17 May</p>
                <p className="time">12:00</p>
            </div>
            <div className="tempNfeels">
                <div>
                <p>Temperature: 13&#176 </p>
                <p>Feels like: 10&#176</p>
                </div>
                <div>
                <p>Rain</p>
                {/* <img  class='iconWeather'src="./png/icons8-rain-96 1.png" alt=""> */}
                <img  className='iconWeather' src="./png/icons8-rain-96 1.png" alt="" />
            </div>
            </div>
    </div>
    ) 
}

export default WeatherOnTime