import React, { Component } from 'react'
import CheckInputFalse from './CheckInput';
import Input from './Input';
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
    
    inputHandler = (event) => {
        const element = event.target.value;
        this.setState({
            name: element
        })
    }
    
    getResponse = (link, name) => {
        const minLengthOfWord = 3;
        if(name.length <= minLengthOfWord) {
            this.setState({
                isValid: false,
                gender: '',
            })
        } else {
            try{
                fetch(`${link}?name=${name}`)
                .then(response => response.json())
                .then(res => {
                    this.setState({
                        gender: res.gender,
                        requestName: res.name,
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
        const element = this.state.name;
        this.getResponse(serverUrl, element);
        this.setState({
            name: ''
        })
    }

    render() {
        const {name, isValid, gender, requestName} = this.state;

        return (
        <form onSubmit={this.btnHandler}>
            <Input
            onInputHandlerChange = {this.inputHandler}
            value = {name}/>
            <CheckInputFalse name = {isValid}/>
            <button>Button</button>
            <div>
                <p style = {{visibility: !gender ? "hidden" : "visible"}}>The gender of {requestName} is {gender}</p>
            </div>
        </form>
        )
    }
}

