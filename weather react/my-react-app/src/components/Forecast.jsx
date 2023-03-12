import ChosenCity from "./ChosenCity/ChosenCity"
import TableScroll from "./ForecastScroll/TableScroll"


function Forecast({CurrentCity, Json, ForecastJson}){
    return(
        <div id="3" className='forecast weather__tab'>
            <ChosenCity Json={Json} CurrentCity={CurrentCity}/>
            <TableScroll ForecastJson={ForecastJson}/>
              
           
        
        </div>
    )
}

export default Forecast