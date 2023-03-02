import React, { Component } from 'react'
import CheckInputFalse from './CheckInput';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            gender: '',
            requestName: '',
            isValid: true,
        }
    }
    
    inpHandler = (event) => {
        let element = event.target.value;
        this.setState({
            name: element
        })
    }
    
    getResponse = (link, name) => {
        if(name.length <= 3) {
            this.setState({
                isValid: false,
                gender: '',
            })
        } else {
            try{
                fetch(`${link}?name=${name}`)
                .then(response => response.json())
                .then(res => {
                    let gender = res.gender;
                    let name = res.name;
                    this.setState({
                        gender: gender,
                        requestName: name,
                        isValid: true,
                    })
                });
            } catch{
                alert('Error')
            }
        }
    } 

    btnHandler = (event) => {
        event.preventDefault();
        const serverUrl = 'https://api.genderize.io';
        let element = this.state.name;
        this.getResponse(serverUrl, element);
        this.setState({
            name: ''
        })
    }

    render() {
        const name = this.state.name;
        const valid = this.state.isValid;
        const gender = this.state.gender;
        const request = this.state.requestName;

        return (
        <form onSubmit={this.btnHandler}>
            <input onChange={this.inpHandler} value={name} type="text" placeholder='Type your name'/>
            <CheckInputFalse name = {valid}/>
            <button>Button</button>
            <div>
                <p style = {{visibility: !gender ? "hidden" : "visible"}}>The gender of {request} is {gender}</p>
            </div>
        </form>
        )
    }
}
