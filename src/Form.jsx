import React from 'react'

export default class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '', json: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		this.setState({ name: value });
	}

	async handleSubmit(event) {
		event.preventDefault();
		const { name } = this.state;
		const serverUrl = 'https://api.genderize.io';
		const url = `${serverUrl}?name=${name}`;
		const response = await fetch(url);
		if (response.ok) {
			const json = await response.json();
			this.setState({ json, name: '' });
		}
	}

	render() {
		const { json } = this.state;
		return (
			<div>
				<form className='form' onSubmit={this.handleSubmit}>
					<label>
						Имя:
						<input className='input' type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<button className='inputBtn' type='submit'>Отправить</button>
				</form>
				<div className="resGender">
					Результат:
					{json.gender && <p>{` ${json.name} is ${json.gender}`}</p>}
				</div>
			</div>
		);
	};
}