import React from 'react';
import { useState } from 'react';
  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
       let name = this.state.value;
      event.preventDefault();
      async function getResponse(nameX){
        let response = await fetch(`https://api.genderize.io?name=${nameX}`)
        let res = await response.json()
        console.log (res.name)
        console.log(res.gender)
        }
      getResponse(name)
    }
    render() {
      return (
        <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className='outPut'></div>
        </>
      );
    }
  }
  export default Form