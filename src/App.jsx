import React from 'react';
import './App.css';

import Title from './Title';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nameLength: null,
      isLoaded: false,
      error: null,
      data: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
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
    const MIN_NAME_LENGTH = 2;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if ( this.state.value < MIN_NAME_LENGTH ) {
        throw new SyntaxError('Имя слишком короткое');
      }

      if(response.ok) {
        this.setState({
          data: data,
        })
      }

    } catch(err) {
      this.setState({
        error: err.message,
      });
    }
  }

  render() {
    const isLoaded = this.state.isLoaded;
    const error = this.state.error;
    
    return (
      <div className="container">
        <div className="todo-wrap">
          <div id="todo-high" className="todo"></div>
            <form onSubmit={this.handleSubmit} id="form" action="#" className="todo__form">
              <Title title="Genderize" />
              <div className="todo__add">
                <input onChange={this.handleChange} type="text" id="user-name" className="todo__input todo-item" placeholder="Введите имя" />
                <Button />
              </div>
              { isLoaded === true && error === null && (
                <div className="todo__result">{this.state.data.name} is {this.state.data.gender}</div>
              )}
              { isLoaded === true && error !== null && (
                <div className="todo__error">{error}</div>
              )}
            </form>
        </div>
      </div>
    );
  }
}

export default App;