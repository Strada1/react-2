export function convertKelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1)
}

export function convertTimestampToTime(unixTimestamp, timezone) {
  const date = new Date((unixTimestamp + timezone) * 1000)
  const hours = '0' + date.getUTCHours()
  const minutes = '0' + date.getMinutes()
  return hours.slice(-2) + ':' + minutes.slice(-2)
}

export function convertTimestampToDayAndMonth(unixTimestamp, timezone) {
  const date = new Date((unixTimestamp + timezone) * 1000)
  const day = date.getUTCDate()
  const monthNum = date.getUTCMonth()
  const monthObj = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря',
  }
  const month = monthObj[monthNum]
  return `${day} ${month}`
}

export function translateWeather(weatherFromData) {
  const weather = {
    Clouds: 'Облачно',
    Clear: 'Ясно',
    Snow: 'Снег',
    Thunderstorm: 'Гроза',
    Drizzle: 'Дождь',
    Rain: 'Дождь',
    Mist: 'Туман',
    Smoke: 'Смог',
    Haze: 'Туман',
    Dust: 'Пыль',
    Fog: 'Туман',
    Sand: 'Песок',
    Ash: 'Пепел',
    Squall: 'Ураган',
    Tornado: 'Торнадо',
  }
  return weather[weatherFromData]
}
