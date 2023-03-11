import {URL} from "./const.js";
import {WEATHER} from "./const.js";


export default async function request(cityName) {
	if (cityName === '') return;
	const currentData = {
		TEMPERATURE: 0,
		ICON: '',
		FEELS_LIKE: '',
		WEATHER: '',
		SUNRISE: '',
		SUNSET: ''
	};
	
	const url = `${URL.SERVER_URL}?q=${cityName}&appid=${URL.API_KEY}`;
	const response = await fetch(url);
	const json = await response.json();
	
	currentData.TEMPERATURE = (json.main.temp - WEATHER.TEMPERATURE_KELVIN).toFixed(1);
	currentData.ICON = json.weather[0].icon;
	currentData.FEELS_LIKE = (json.main.feels_like - WEATHER.TEMPERATURE_KELVIN).toFixed(1);
	currentData.WEATHER = json.weather[0].main;
	currentData.SUNRISE = (JSON.stringify(new Date(1000 * json.sys.sunrise))).slice(12, 20);
	currentData.SUNSET = (JSON.stringify(new Date(1000 * json.sys.sunset))).slice(12, 20);
	
	return currentData;
}