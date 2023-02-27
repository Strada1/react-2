import './main.css'
import Input from '../Input/Input';
import Button from '../Button/Button';
import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text:'', data:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      text: value,  
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;

    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${text}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({data, text: ''});
    }
  }

  render() {
    const {data, text} = this.state;
    return(
        <main className="main">
          <form className='form' onSubmit={this.handleSubmit} >
              <Input onChange={this.handleChange} value={text}/>
              <Button/>
              <div className="result">{data.gender && <span>{` ${data.name} is ${data.gender}`}</span>} </div>
           </form>
        </main>
    )
  }
}

export default Main;