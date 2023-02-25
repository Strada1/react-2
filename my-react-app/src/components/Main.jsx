import React from 'react';
import Button from './Button';
import TextInput from './TextInput';
import TextError from './TextError';
import Form from './Form';

const URL = 'https://api.genderize.io';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', json: '', textError: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ text: value });
    this.checkErrorText(value);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    const { textError } = this.state;
    if (textError) return;

    const serverUrl = `${URL}?name=${text}`;
    const response = await fetch(serverUrl);
    if (response.ok) {
      const json = await response.json();
      this.setState({ json, text: '' });
    }
  }

  checkErrorText(text) {
    const reg = /[^a-z]/i;
    const { length } = text;
    const result = text.match(reg) ?? length < 2 ?? length > 29;
    this.setState({ textError: result });
  }

  render() {
    const { json } = this.state;
    const { text } = this.state;
    const { textError } = this.state;
    return (
      <div className="App">
        <Form
          className="genderize genderize__form"
          onSubmit={this.handleSubmit}
        >
          <TextInput
            onChange={this.handleChange}
            className="genderize__input"
            value={text}
          />
          {textError && <TextError value={text} />}
          <Button className="genderize__button" text="Узнать" />
        </Form>
        <div className="genderize__output">
          Полученный результат:
          {json.gender && <p>{` ${json.name} is ${json.gender}`}</p>}
        </div>
      </div>
    );
  }
}

export default Main;
