import React from 'react';
import './App.css';
import Main from './components/Main';

const url = 'https://api.genderize.io';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', json: '', textError: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      text: value,
      textError: this.checkErrorText(),
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    const { textError } = this.state;
    if (textError) return;

    const serverUrl = `${url}?name=${text}`;
    const response = await fetch(serverUrl);
    if (response.ok) {
      const json = await response.json();
      this.setState({ json, text: '' });
    }
  }

  checkErrorText() {
    const reg = /[^a-z]/i;
    const { text } = this.state;
    return text.match(reg) ?? text.length < 2 ?? text.length > 29;
  }

  render() {
    const { json } = this.state;
    const { text } = this.state;
    const { textError } = this.state;
    return (
      <div className="genderize">
        <h3>Узнайте свой пол</h3>
        <Main
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={text}
          error={textError}
        />
        <div className="genderize__output">
          Полученный результат:
          {json.gender && <span>{` ${json.name} is ${json.gender}`}</span>}
        </div>
      </div>
    );
  }
}
export default App;
