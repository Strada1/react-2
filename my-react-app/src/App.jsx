import React from 'react';
import './App.css';
import Main from './components/Main';

const url = 'https://api.genderize.io';

function checkErrorText(value) {
  const reg = /[^a-z]/i;
  const text = value.trim();
  return text.match(reg) ?? text.length < 2 ?? text.length > 29;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', json: '', error: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      text: value,
      error: checkErrorText(value),
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    const { error } = this.state;
    if (error) return;

    const serverUrl = `${url}?name=${text}`;
    const response = await fetch(serverUrl);
    if (response.ok) {
      const json = await response.json();
      this.setState({ json, text: '' });
    }
  }

  render() {
    const { json } = this.state;
    const { text } = this.state;
    const { error } = this.state;
    return (
      <div className="genderize">
        <h3>Узнайте свой пол</h3>
        <Main
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={text}
          error={error}
        />
        <div className="genderize__output">
          Полученный результат:
          {/* {json.gender && ` ${json.name} is ${json.gender}`} */}
          {json.gender && <span>{` ${json.name} is ${json.gender}`}</span>}
        </div>
      </div>
    );
  }
}
export default App;
