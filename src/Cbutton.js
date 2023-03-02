import React from 'react'

export default function Cbutton(props) {
	/* function handleSubmit(e) {
		e.preventDefault();
		console.log('Отправлена форма.');

	} */
	return (

		<button onClick={props.onClick} value="Отпрaвить" className='button' >
			Отправить
		</button>

	)
}



