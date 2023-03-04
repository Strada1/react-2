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
        const response = responseDataName(firstName);
        console.log(response);
        this.setState({
            isLoaded: true,
            data: response,
            error: null,
        });

        /* const invalidСharacters = 2;
        const firstName = this.state.value;
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

                this.setState({
                    isLoaded: true,
                    data: data,
                    error: null,
                });
            }
        } catch (error) {
            this.setState({
                isLoaded: true,
                error: error.message,
            });
        }*/
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
            console.log(data);
            return await data;
        }
    } catch (error) {
        return this.setState({
            isLoaded: true,
            error: error.message,
        });
    }
}

export default Main;
