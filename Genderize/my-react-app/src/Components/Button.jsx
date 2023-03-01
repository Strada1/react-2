import React, { Component } from 'react'
import CheckInputFalse from './CheckInput';

const serverUrl = 'https://api.genderize.io';


export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            gender: '',
            requestName: ''
        }
    }
    
    inpHandler = (event) => {
        let element = event.target.value;
        this.setState({
            name: element
        })
    }
    
    getResponse = (link, name) => {
        try{
            fetch(`${link}?name=${name}`)
            .then(response => response.json())
            .then(res => {
                let gender = res.gender;
                let name = res.name;
                this.setState({
                    gender: gender,
                    requestName: name,
                })
            });
        } catch{
            alert('Error')
        }
    } 

    btnHandler = () => {
        let element = this.state.name;
        this.getResponse(serverUrl, element);
    }

    render() {
        return (
        <div>
            <input onChange={this.inpHandler} value={this.state.name} type="text" placeholder='Type your name'/>
            <CheckInputFalse name = {this.state.requestName} gender = {this.state.gender}/>
            <button onClick={this.btnHandler}>Button</button>
            <div>
                <p style = {{visibility: !this.state.gender ? "hidden" : "visible"}}>The gender of {this.state.requestName} is {this.state.gender}</p>
            </div>
        </div>
        )
    }
}
