import ChosenCity from "./ChosenCity/ChosenCity"
import TableScroll from "./ForecastScroll/TableScroll"


function Forecast({CurrentCity, Json}){
    return(
        <div id="3" className='forecast weather__tab'>
            <ChosenCity Json={Json} CurrentCity={CurrentCity}/>
            <TableScroll/>
              
           
        
        </div>
    )
}

export default Forecast