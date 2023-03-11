import { useState } from 'react'
import Form from "./components/Form.jsx";
import MainScreen from "./components/MainScreen.jsx";
import FavoriteList from "./components/FavoriteList.jsx";
import './App.css'
import './styles/Form.css'
import './styles/MainScreen.css'
import './styles/FavoriteList.css'


function App() {
  const [currentValueCity, setCurrentValueCity] = useState('');
  const [temperature, setTemperature] = useState('0');
  const [icon, setIcon] = useState('');
  const [feelsLike, setFeelsLike] = useState('0');
  const [weather, setWeather] = useState('0');
  const [sunrise, setSunrise] = useState('0');
  const [sunset, setSunset] = useState('0');
  
  const [listCity, setListCity] = useState([]);
  
  const saveDataForWeather = (currentValueCity, currentWeather) => {
    setCurrentValueCity(currentValueCity);
    setTemperature(currentWeather.TEMPERATURE);
    setIcon(currentWeather.ICON);
    setFeelsLike(currentWeather.FEELS_LIKE);
    setWeather(currentWeather.WEATHER);
    setSunrise(currentWeather.SUNRISE);
    setSunset(currentWeather.SUNSET);
  }
  

  const addInFavoriteList = (arrayCity) => {
    setListCity([...arrayCity]);
    console.log(listCity);
  }
  
  return (
    <div className="wrapper">
      <div className="container">
        
        <Form onChange={saveDataForWeather}/>
        <MainScreen onClick={addInFavoriteList}
                    icon={icon}
                    currentValueCity={currentValueCity}
                    temperature={temperature}
                    feelsLike={feelsLike}
                    weather={weather}
                    sunrise={sunrise}
                    sunset={sunset}/>
        <FavoriteList listCity={listCity}/>
        
      </div>
    </div>
  )
}

export default App
