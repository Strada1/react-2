import React, {useState} from 'react';




function MainScreen({ currentValueCity, temperature, icon, feelsLike, weather, sunrise, sunset, onClick }) {
	const [toggleState, setToggleState] = useState(1);
	const [arrayCity, setArrayCity] = useState([]);
	
	const toggleTab = (index) => {
		setToggleState(index);
	}
	
	const addInFavoriteList = () => {
		setArrayCity([...arrayCity, {
			id: arrayCity.length,
			cityValue: currentValueCity,
		}]);
		onClick(arrayCity);
	}
	
	
	return (
		<div>
			
			<div className="content-tabs">
				
				<div className={toggleState === 1 ? "content active-content" : "content"}>
					
					<div className="container__info">
						<p className="container__info__temperature"> {temperature !== '0' ? temperature+'°' : ''} </p>
						<img src={icon === '' ? "./files/background.png" : `./files/${icon}.png`} alt="" className="container__info__sign"/>
						<div className="container__info__block">
							<img src={icon === '' ? "./files/background.png" : "./files/hearth2.svg"} onClick={() => addInFavoriteList()} alt="" className="container__info__heath"/>
						</div>
						<p className="container__info__town"> {currentValueCity} </p>
					</div>
					
					{/*<ul>*/}
					{/*	{arrayCity.map(city => <li> {city.cityValue} </li>)}*/}
					{/*</ul>*/}
				</div>
				
				
				<div className={toggleState === 2 ? "content active-content" : "content"}>
					
					<div className="container__info__2">
						<p className="container__info__town__2"> {currentValueCity} </p>
						<ul className="container__info__2__list">
							<li className="item"> {temperature !== '0' ? 'Temperature: '+temperature+'°' : ''} </li>
							<li className="item"> {feelsLike !== '0' ? 'Feels Like: '+ feelsLike+'°' : ''} </li>
							<li className="item"> {weather !== '0' ? 'Weather: '+weather : '' } </li>
							<li className="item"> {sunrise !== '0' ? 'Sunrise: '+sunrise : ''} </li>
							<li className="item"> {sunset !== '0' ? 'Sunset: '+sunset : ''} </li>
						</ul>
					</div>
				
				</div>
				
				
				<div className={toggleState === 3 ? "content active-content" : "content"}>
					
					<div className="container__info__3">
						<p className="container__info__town__3"> Aktobe </p>
						<div className="container__info__3__card">
							<p className="container__info__3__card__date"> 17 May </p>
							<p className="container__info__3__card__temperature"> Temperature: 13° </p>
							<p className="container__info__3__card__time"> 12:00 </p>
							<p className="container__info__3__card__weather"> Rain </p>
						</div>
						<br/>
						<div className="container__info__3__card">
							<p className="container__info__3__card__date"> 17 May </p>
							<p className="container__info__3__card__temperature"> Temperature: 13° </p>
							<p className="container__info__3__card__time"> 12:00 </p>
							<p className="container__info__3__card__weather"> Rain </p>
						</div>
					</div>
					
				</div>
				
			</div>
			
			
			<div className="bloc-tabs">
				<div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
				     onClick={() => toggleTab(1)}> Now </div>
				
				<div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
				     onClick={() => toggleTab(2)}> Details </div>
				
				<div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
				     onClick={() => toggleTab(3)}> Forecast </div>
			</div>
			
		
		</div>
	);
	
	

}

export default MainScreen;