import { createContext, React, useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Search from './components/Search'
import fetchRequest from './services/request'
import { storage, storageGetItem, storageSetItem } from './storage/storage'

export const CitiesContext = createContext(null)

const defaultValue = {
  currentCity: 'Псков',
  favoriteCities: [],
}

const App = () => {
  const [currentCity, setCurrentCity] = useState(
    storageGetItem(storage.currentCity) || defaultValue.currentCity
  )
  const [weatherData, setWeatherData] = useState({})
  const [forecastData, setForecastData] = useState([])
  const [favoriteCities, setFavoriteCities] = useState(
    storageGetItem(storage.favoriteCities) || defaultValue.favoriteCities
  )
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(true)

  const getData = (city, weather, forecast) => {
    setCurrentCity(city)
    storageSetItem(storage.currentCity, city)
    setWeatherData(weather)
    setForecastData(forecast)
  }

  const requestCity = async (city) => {
    setIsLoaded(false)
    const response = await fetchRequest(city)
    setIsLoaded(true)
    if (response.weather && response.forecast) {
      const {
        weather,
        forecast,
        weather: { cityName },
      } = response
      getData(cityName, weather, forecast)
    } else {
      handleError(response)
    }
  }

  useEffect(() => {
    requestCity(currentCity)
  }, [])

  const getFavoriteCities = (city) => {
    let newFavoriteCities = []
    if (favoriteCities.includes(city)) {
      newFavoriteCities = favoriteCities.filter((item) => item !== city)
    } else {
      newFavoriteCities = [...favoriteCities, currentCity]
    }
    setFavoriteCities(newFavoriteCities)
    storageSetItem(storage.favoriteCities, newFavoriteCities)
  }

  const clearFavoriteCities = () => {
    setFavoriteCities([])
    storageSetItem(storage.favoriteCities, defaultValue.favoriteCities)
  }

  const handleError = (error) => {
    setError(error)
  }

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 10000)
  }, [error])

  return (
    <div className='wrapper'>
      <div className='container'>
        <Search requestCity={requestCity} handleError={handleError} />
        <CitiesContext.Provider
          value={{ currentCity, favoriteCities, weatherData, forecastData, error, isLoaded }}
        >
          <Main
            getFavoriteCities={getFavoriteCities}
            handleError={handleError}
            clearFavoriteCities={clearFavoriteCities}
            requestCity={requestCity}
          />
        </CitiesContext.Provider>
      </div>
    </div>
  )
}

export default App
