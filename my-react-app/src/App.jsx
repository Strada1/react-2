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

/*function Main(props) {
  return <h1> {props.name} is female</h1>;
}

function Button(props) {
 
  return  ( <form onSubmit={handleClick}>
    <input className="card" placeholder='Name'></input>
       <button>{props.name}</button>
    </form>)
}
function Input() {
  return <input className="card"></input>;
}
function handleClick(e) {
  e.preventDefault();
  console.log('Отправлена форма.');
  }
function App() {
  return (
    <div>
      <Button name="ok" />
      <Main name="Sara" />
    </div>
  );
}
*/
/*function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}*/

export default App

