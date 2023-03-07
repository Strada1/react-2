import './App.css'
import { useState } from 'react'
import Input from './Components2/Input';
import Button from './Components2/Button';
import CheckLength from './Components2/CheckLengthOfName';

function App() {
  let emptyString = '';
  const [name, setName] = useState(emptyString);
  const [gender, setGender] = useState(emptyString);
  const [requestName, setRequestName] = useState(emptyString);
  const [isValid, setIsValid] = useState(true);

  function inputHandler(event) {
    const element = event.target.value;
    setName(element)
}

function buttonHandler(event) {
  event.preventDefault();
  const serverUrl = 'https://api.genderize.io';
  const element = name;
  getResponse(serverUrl, element);
  setName(emptyString);
}

function getResponse(link, name) {
  const minLengthOfWord = 3;
  if(name.length <= minLengthOfWord) {
      setIsValid(false);
      setGender(emptyString);
  } else {
      try{
          fetch(`${link}?name=${name}`)
          .then(response => response.json())
          .then(res => {
              setGender(res.gender);
              setRequestName(res.name);
              setIsValid(true);
          });
      } catch{
          alert('Error')
      }
  }
} 

return (
  <div>
  <form>
      <Input
      inputHandler = {inputHandler}
      value = {name}/>
      <Button
      buttonHandler = {buttonHandler}/>
  </form>
  <div>
      <p style = {{visibility: !gender ? "hidden" : "visible"}}>The gender of {requestName} is {gender}</p>
  </div>
  <CheckLength name = {isValid}/>
  </div>
)
}

export default App
