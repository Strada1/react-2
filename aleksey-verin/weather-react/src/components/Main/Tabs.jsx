/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import { CitiesContext } from '../../App'
import {
  convertKelvinToCelsius,
  convertTimestampToDayAndMonth,
  convertTimestampToTime,
  translateWeather,
} from '../../services/helpers'
import ImgHeart from '../Images/ImgHeart'

const Tabs = ({ getFavoriteCities }) => {
  const { currentCity, favoriteCities, weatherData, forecastData, isLoaded } =
    useContext(CitiesContext)
  const { cityName, feelsLike, temp, description, icon, sunrise, sunset, timezone } = weatherData

  const tabs = {
    now: 'now',
    details: 'details',
    forecast: 'forecast',
  }

  const [activeTab, setActiveTab] = useState(tabs.now)

  const switchTab = (e) => {
    const tabLink = e.target.dataset.name
    if (tabLink === activeTab) return
    setActiveTab(tabLink)
  }

  return (
    <div className='section-tabs'>
      <div className='block-tabs'>
        <div data-name='now' className={`tab-content ${activeTab === tabs.now ? 'active' : null}`}>
          <div className='tab-now'>
            <div className='now-temperature'>
              {isLoaded && (
                <>
                  <span className='current-temp'>{temp}</span>
                  <span>&#8451;</span>
                </>
              )}
            </div>
            <div className='now-sky'>
              {icon && (
                <img
                  className='picture-weather'
                  src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                />
              )}
            </div>
            <div className='now-city'>
              <div className='now-city-name'>{cityName}</div>
              <div
                onClick={() => getFavoriteCities(currentCity)}
                className={`favorite-button ${
                  favoriteCities.includes(currentCity) ? 'checked' : ''
                }`}
              >
                <ImgHeart />
              </div>
            </div>
          </div>
        </div>
        <div
          data-name='details'
          className={`tab-content ${activeTab === tabs.details ? 'active' : null}`}
        >
          <div className='tab-details'>
            <div className='details-city-name'>{cityName}</div>
            <div className='details-list'>
              <ul>
                <li className='details-item'>
                  Температура: <span className='current-temp'>{temp}</span>
                  <span>&#8451;</span>
                </li>
                <li className='details-item'>
                  Ощущается как: <span className='current-feels'>{feelsLike}</span>
                  <span>&#8451;</span>
                </li>
                <li className='details-item'>
                  Погода: <span className='current-cloudy'>{description}</span>
                </li>
                <li className='details-item'>
                  Восход: <span className='current-sunrise'>{sunrise}</span>
                </li>
                <li className='details-item'>
                  Закат: <span className='current-sunset'>{sunset}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          data-name='forecast'
          className={`tab-content ${activeTab === tabs.forecast ? 'active' : null}`}
        >
          <div className='tab-forecast'>
            <div className='forecast-city-name'>{cityName}</div>
            <div className='forecast-list'>
              {forecastData.map((item, index) => (
                <div key={index} className='forecast-item'>
                  <div className='date-time'>
                    <div className='date'>{convertTimestampToDayAndMonth(item.dt, timezone)}</div>
                    <div className='time'>{convertTimestampToTime(item.dt, timezone)}</div>
                  </div>
                  <div className='weather'>
                    <div className='temper'>
                      <div className='real-temp'>
                        Температура: {convertKelvinToCelsius(item.main.temp)}
                        <span>&#8451;</span>
                      </div>
                      <div className='feels-temp'>
                        Ощущается как: {convertKelvinToCelsius(item.main.feels_like)}
                        <span>&#8451;</span>
                      </div>
                    </div>
                    <div className='sky'>
                      <div className='sky-text'>{translateWeather(item.weather[0].main)}</div>
                      <img
                        className='sky-pic'
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      ></img>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='block-links'>
        <button
          onClick={switchTab}
          data-name='now'
          className={`tab-links ${activeTab === tabs.now ? 'active' : null}`}
        >
          Сейчас
        </button>
        <button
          onClick={switchTab}
          data-name='details'
          className={`tab-links ${activeTab === tabs.details ? 'active' : null}`}
        >
          Детали
        </button>
        <button
          onClick={switchTab}
          data-name='forecast'
          className={`tab-links ${activeTab === tabs.forecast ? 'active' : null}`}
        >
          Прогноз
        </button>
      </div>
    </div>
  )
}

export default Tabs
