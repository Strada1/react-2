//import reactLogo from './assets/react.svg';
import React from 'react';
import Welcome from './Component_1';
//import { useState } from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Welcome className="blue" name="Иван" but="buttonb" />
            <Welcome className="red" name="Таня" but="buttonr" />
        </div>
    );
}

export default App;
