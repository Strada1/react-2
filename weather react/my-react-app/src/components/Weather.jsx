
import Forecast from './Forecast'
import Buttons from './Buttons'
import Search from './Search'
import Now from './Now'
import Details from './Details'
import AddedLocations from './AddedLocations'
import { useState, useEffect } from 'react';
import Storage from './Storage'
import ChosenCityStorage from './ChosenCity/ChosenCityStorage'

const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecast = 'http://api.openweathermap.org/data/2.5/forecast';


function Weather (){
  const [CurrentCity, setCurrentCity] = useState(ChosenCityStorage.get());


    const [Json, setJson] = useState([]);
    const [ForecastJson, setForecastJson] = useState([]);
    const [cities, setCities] =  useState(Storage.get());

    useEffect(() => {
      Storage.set(cities);
    },[cities])
    
    
    useEffect(() => {
      ChosenCityStorage.set(CurrentCity);
    },[CurrentCity])

    
    
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
    console.log(CurrentCity)
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
          <div >
    
          <table  >
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
        </div>
      )
}

export default Weather