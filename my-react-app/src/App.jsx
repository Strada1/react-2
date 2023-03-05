import './App.css'
import TextInput from './TextInput'
import Button from './Button'
import Form from './Form'
import React, { Component } from 'react';

const URL = 'https://api.genderize.io';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' , json: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({ text: value });
    
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.text === '' || this.state.text.length < 2) {
   alert('NONONO')
    } const { text } = this.state;
      const serverUrl = `${URL}?name=${text}`;
      const response = await fetch(serverUrl);
      if (response.ok) {
        const json = await response.json();
        this.setState({ json, text: '' });
    }
  }
  render() {
    const { text } = this.state
    const { json } = this.state
    return (
        <Form className='card' onSubmit={this.handleSubmit}>
        <TextInput onChange={this.handleChange}
          className="genderize__input"
          value={text} />
        <Button className="genderize__button" props='Узнать'/>
        <div>
          {json.name} {json.gender}
        </div>
      </Form>
       
    );
}
}

export default App

