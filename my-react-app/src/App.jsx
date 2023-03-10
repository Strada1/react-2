import { useState } from 'react'
import './App.css'
import Header from './Header'
import List from './List'
import { storage ,serverUrl, apiKey, kelvinToCelsius} from './LSandConst'
import NowList from './NowList'

function App() {

  const [cites, setList] = useState(storage.getCityFavoriteList() || [])
  let [temperature, setTemp] = useState('')
  let [city, setCity] = useState('')
  let [icon, setIcon] = useState('')
  
  const addCity = (todo) => {
    setList([...cites, todo])
    storage.saveCityFavoriteList([...cites, todo])
  }
  const deleteCity = (id) => {
    setList(todos.filter((item) => item.id !== id))
    storage.saveCityFavoriteList(cites.filter((item) => item.id !== id))
  }
  async function requestWeather (inputValue) {
    const url = `${serverUrl}?q=${inputValue}&appid=${apiKey}`;
    const response = await fetch(url);
    const commits = await response.json();
    setTemp(temperature = `${Math.round((commits.main.temp) - kelvinToCelsius)}°C `)
    setCity(city = commits.name)
    setIcon(icon = `http://openweathermap.org/img/wn/${commits.weather[0].icon}@2x.png`)
}
  return (
    <div>
      <Header
        requestWeather={requestWeather}
      />
      <div className='flex'>
        <NowList
        icon={icon}
        addCity={addCity}
        task={city}
        temperature={temperature}
      />
        <List
        requestWeather={requestWeather}
        cites={cites}
        deleteCity={deleteCity}
        />
        </div>
      </div>
  )
}
export default App
