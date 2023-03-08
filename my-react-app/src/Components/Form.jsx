import React from "react";
import Button from "./Button";
import InputText from "./InputText";
import './style.css'

const defaultValue = '';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: defaultValue};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Name is: ' + this.state.value);
  }
  render() {
    return(
    <form className='form' onSubmit={this.handleSubmit}>
      <InputText type='text' placeholder='Enter your name in english' value={this.state.value} onChange={this.handleChange} />
      <Button/>
    </form>
    );
  }
  
}

export default  Form