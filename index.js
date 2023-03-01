import React from 'react';
import ReactDOM from 'react-dom/client';
/* import App from './App';
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
  console.log(props)
  return <h1 style={{ color: props.color }}> Привет, {props.name}</h1 >
}

const h1Elem = <Welcome name='Messi' color='red' />

root.render(
  h1Elem
);
