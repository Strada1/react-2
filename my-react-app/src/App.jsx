import React from 'react';
import './App.css';
import TextInput from './Input';
import Button from './Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: null,
            isLoaded: false,
            data: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            value: value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const firstName = this.state.value;
        const response = await responseDataName(firstName);

        this.setState({
            isLoaded: true,
            data: response.gender ? response : [],
            error: response.message ? response.message : null,
        });
    }

    render() {
        const isLoaded = this.state.isLoaded;
        const error = this.state.error;
        const gender = this.state.data.gender;
        const name = this.state.data.name;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextInput onValueChange={this.handleChange} />
                    <Button />
                </form>

                {isLoaded && error === null && gender && (
                    <div>
                        {name} is {gender}
                    </div>
                )}

                {isLoaded && error !== null && (
                    <div style={{ color: 'red' }}>{error}</div>
                )}
            </div>
        );
    }
}

async function responseDataName(firstName) {
    const invalidСharacters = 2;
    const nameLength = firstName.length;

    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (nameLength <= invalidСharacters) {
            throw new SyntaxError('Данные некорректны');
        }
        if (response.ok) {
            if (!data.gender) {
                throw new SyntaxError('Введите имя латиницей ');
            }
            return await data;
        }
    } catch (error) {
        return error;
    }
}

export default Main;
