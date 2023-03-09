
import Forecast from './Forecast'
import Buttons from './Buttons'
import Search from './Search'
import Now from './Now'
import Details from './Details'
import AddedLocations from './AddedLocations'
import { useState } from 'react';


const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecast = 'http://api.openweathermap.org/data/2.5/forecast';

const Cities = []
function Weather (){

  const [CurrentCity, setCurrentCity] = useState('');
  console.log(CurrentCity)
    const [Json, setJson] = useState([]);
    const [ForecastJson, setForecastJson] = useState([]);
    const [cities, setCities] =  useState(Cities);

  

    function handlerAdd(CurrentCity){
      setCities(prev =>[ {
        id: new Date(),
        name: CurrentCity,
         }, ...prev,
        ])
    }

    function handlerDelete(name){
     
		  setCities([...cities].filter(elem => elem.name !== name))
    }


    async function handleSubmit (e){
        e.preventDefault();
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
        const url = `${serverUrl}?q=${CurrentCity}&appid=${apiKey}`;
        const forecastUrl =`${forecast}?q=${CurrentCity}&appid=${apiKey}`;

        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl)

        if(response.ok && forecastResponse.ok){
            const json = await response.json();
            const forecastJson = await forecastResponse.json();
            setJson(json)
            setForecastJson(forecastJson)
            console.log(forecastJson)
        }
    }


    return(
        <table >
          <tbody>
          <tr>
            
            <div className='searchDiv'>
              <Search handleSubmit={handleSubmit} setCurrentCity={setCurrentCity}/>
            </div>
          </tr>
          
          <tr>
           
            <td className='about'>
              <Now handlerAdd={handlerAdd} handlerDelete={handlerDelete} cities={cities} CurrentCity={CurrentCity} Json={Json} handleSubmit={handleSubmit}
               />
              <Details id="1"Json={Json}  />
              <Forecast id="2" Json={Json} />
              <Buttons id="3"/>
            </td>
            <td>
              <AddedLocations cities={cities} setJson={setJson} setCurrentCity={setCurrentCity} CurrentCity={CurrentCity} handleSubmit={handleSubmit}/>
            </td>
        
          </tr>
          </tbody>
        </table>
    
      )
}

export default Weather