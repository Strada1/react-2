import WeatherOnTime from "./WeatherOnTime"
function TableScroll({ForecastJson}){
    return(
        <div className="table-scroll">
            {ForecastJson.list && ForecastJson.list.map(ForecastItem => <WeatherOnTime ForecastItem={ForecastItem} key={ForecastItem.dt_txt} ForecastJson={ForecastJson}/>)}
        </div>
    )
}

export default TableScroll