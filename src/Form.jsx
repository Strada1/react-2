import React from 'react'
import Button from './Button'
import TextInput from './TextInput'

export default function Form() {

	function handleSubmit(event) {
		event.preventDefault();
		const input = event.target.querySelector(".input").value;
		console.log(input)
		event.target.reset()
	}

		return (
			<form className='form' action="#" onSubmit={handleSubmit}>
				<TextInput />
				<Button />
			</form>
		);
	}

