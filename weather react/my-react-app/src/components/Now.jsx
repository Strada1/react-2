import { useEffect } from "react";
import ChosenCity from "./ChosenCity/ChosenCity";

function Now({CurrentCity, Json, handlerAdd, cities, handlerDelete, handleSubmit}){

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
       <ChosenCity Json={Json} CurrentCity={CurrentCity} handleSubmit={handleSubmit}/>
        
        <svg onClick={() => cities.find(elem => elem.name === Json.name)
             ? handlerDelete(CurrentCity)
              : handlerAdd(CurrentCity)
               } 
               className="like" id="like" width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <g>
            <title>Layer 1</title>
            <g id="layer1">
             <path id="svg_2" d="m219.28949,21.827393c-66.240005,0 -119.999954,53.76001 -119.999954,120c0,134.755524 135.933151,170.08728 228.562454,303.308044c87.574219,-132.403381 228.5625,-172.854584 228.5625,-303.308044c0,-66.23999 -53.759888,-120 -120,-120c-48.047913,0 -89.401611,28.370422 -108.5625,69.1875c-19.160797,-40.817078 -60.514496,-69.1875 -108.5625,-69.1875z"/>
            </g>
           </g>                    
        </svg>
        
        </div>
    </div>
   
    
</div>
    )
}
export default Now