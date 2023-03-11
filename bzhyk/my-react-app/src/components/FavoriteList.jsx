import React, {useEffect, useState} from 'react';


function FavoriteList({ listCity }) {
	
	return (
		<div>
			<div className="container__add">
				<p className="container__add__text"> Added Locations: </p>
			</div>
			<div className="container__list">
				<ul className="container__listTown">
					{listCity.map((city) => <li key={city.id}> {city.cityValue} </li>) }
					
					{/*<li className="container__listTown__li"> Amur <button className="container__listTown__button">✖</button></li>*/}
				</ul>
			</div>
			
			
			
		</div>
	);
}

export default FavoriteList;