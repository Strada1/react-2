import React, { useState } from 'react';
import './App.css';
import Button from './Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            nameLength: null,
            eventForm: false,
            error: null,
            isLoaded: false,
            data: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            nameLength: event.target.value.length,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isLoaded: true,
        });

        const firstName = this.state.value;
        const serverUrl = 'https://api.genderize.io';
        const url = `${serverUrl}?name=${firstName}`;
        const invalidСharacters = 2;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (this.state.nameLength <= invalidСharacters) {
                throw new SyntaxError('Данные некорректны');
            }
            if (response.ok) {
                this.setState({
                    isLoaded: true,
                    data: data,
                });
            }
        } catch (error) {
            this.setState({
                isLoaded: true,
                error: error.message,
            });
        }
    }

    handleCallback = (childData) => {
        this.setState({ name: childData });
    };

    render() {
        const isLoaded = this.state.isLoaded;
        const error = this.state.error;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.value}
                        onChange={this.handleChange}
                        className="inptText"
                        type="text"
                        placeholder="Введите имя"
                    />
                    <Button />

                    {isLoaded === true && error === null && (
                        <div>
                            {this.state.data.name} is {this.state.data.gender}
                        </div>
                    )}

                    {isLoaded === true && error !== null && (
                        <div style={{ color: 'red' }}>{this.state.error}</div>
                    )}
                </form>
            </div>
        );
    }
}

export default Main;
