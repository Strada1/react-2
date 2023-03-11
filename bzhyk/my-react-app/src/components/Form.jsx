import React, {useState} from 'react';
import request from "../request.js";

function Form({ onChange }) {
	const [currentValueCity, setCurrentValueCity] = useState('');

	async function saveDataForWeather (currentValueCity) {
		let currentWeather = await request(currentValueCity);
		onChange(currentValueCity, currentWeather);
	}
	
	return (
			<div className="container__searchTown">
				<form action="#" className="container__searchTown__form">
					<input value = {currentValueCity}
					       onChange={e => setCurrentValueCity(e.target.value)}
					       type="text"
					       placeholder="Введите название города"
					       className="container__searchTown__input"/>
					<img src="./files/Path_2.png"
					     onClick={() => saveDataForWeather(currentValueCity)}
					     alt=""
					     className="container__searchTown__searchButton"/>
				</form>
			</div>
	);
}

export default Form;