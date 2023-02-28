import React, { useState } from 'react';
import './App.css';
import Button from './Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            nameLength: null,
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
        console.log(event);
    }

    async handleSubmit(event) {
        event.preventDefault();

        console.log(this.state.isLoaded);

        const firstName = this.state.value;
        const serverUrl = 'https://api.genderize.io';
        const url = `${serverUrl}?name=${firstName}`;
        const invalidСharacters = 2;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (this.state.nameLength <= invalidСharacters) {
                this.setState({
                    isLoaded: true,
                });
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

                console.log(this.state.data);
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
        const gender = this.state.data.gender;

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
                </form>

                {isLoaded && error === null && gender && (
                    <div>
                        {this.state.data.name} is {this.state.data.gender}
                    </div>
                )}

                {isLoaded && error !== null && (
                    <div style={{ color: 'red' }}>{this.state.error}</div>
                )}
            </div>
        );
    }
}

export default Main;
