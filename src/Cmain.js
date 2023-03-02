import React, { useState } from 'react'
import CtextInput from './CtextInput';
import Cbutton from './Cbutton';


export default function Cmain() {
	const [value, setValue] = useState('');
	const [gender, setGender] = useState('');
	const [result, setResult] = useState('');
	const serverUrl = 'https://api.genderize.io';
	const url = `${serverUrl}?name=${value}`;
	console.log(url)
	fetch(url)
		.then(function (response) {
			return response.json();
		})

		.then(function (result) {
			let gender = result.gender;
			setGender(gender)
		})




	function handleInputChange(e) {
		setValue(e.target.value);
	}

	function handleButtonClick(e) {
		let result = `${value} is ${gender}`
		console.log(`${value} is ${gender}`);
		setResult(result);
	}


	return (
		<div className='main'>
			<CtextInput value={value} onChange={handleInputChange} />
			<Cbutton onClick={handleButtonClick} />
			<h3>{result}</h3>
		</div>
	)

}

/* export default function Cmain() {
	const [value, setValue] = useState('');

	function handleInputChange(e) {
		setValue(e.target.value);
	}

	function handleButtonClick() {
		console.log('name is ', value);

	}

	return (
		<div className="main">

			<CtextInput value={value} onChange={handleInputChange} />
			<Cbutton onClick={handleButtonClick} />

		</div>
	);

} */


