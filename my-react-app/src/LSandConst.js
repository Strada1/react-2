const cityStorageName = 'CityList' 
const storage = {
    saveCityFavoriteList: function (todosMas) {
      localStorage.setItem(cityStorageName, JSON.stringify(Array.from(todosMas)));
    },
    getCityFavoriteList() {
      return JSON.parse(localStorage.getItem(cityStorageName));
    },
}
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '84cf734f7cfaeb12fcf0d22f41dfb0d6';
const kelvinToCelsius = 273.13;
export { storage, serverUrl, apiKey, kelvinToCelsius }