import { convertKelvinToCelsius, convertTimestampToTime } from './helpers'

const fetchRequest = async (cityName) => {
  const serverUrlWeather = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'
  const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}&lang=ru`
  const serverUrlForecast = 'https://api.openweathermap.org/data/2.5/forecast'
  const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}&lang=ru`

  try {
    const responseCurrentWeather = await fetch(urlWeather)
    const responseForecast = await fetch(urlForecast)
    if (responseCurrentWeather.ok && responseForecast.ok) {
      const dataWeather = await responseCurrentWeather.json()
      const dataForecast = await responseForecast.json()
      const weather = transformWeather(dataWeather)
      const forecast = transformForecast(dataForecast)
      return { weather, forecast }
    }
    if (responseCurrentWeather.status === 404 || responseForecast.status === 404) {
      return { error: '404' }
    }
    if (responseCurrentWeather.status === 400 || responseForecast.status === 400) {
      return { error: '400' }
    }
  } catch (err) {
    return { error: 'other' }
  }
}

const transformWeather = (data) => {
  return {
    cityName: data.name,
    feelsLike: convertKelvinToCelsius(data.main.feels_like),
    temp: convertKelvinToCelsius(data.main.temp),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    sunrise: convertTimestampToTime(data.sys.sunrise, data.timezone),
    sunset: convertTimestampToTime(data.sys.sunset, data.timezone),
    timezone: data.timezone,
  }
}

const transformForecast = (dataForecast) => {
  return dataForecast.list
}

export default fetchRequest
