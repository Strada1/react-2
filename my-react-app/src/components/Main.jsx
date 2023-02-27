import { Button } from './Button'
import { Input } from './Input'
import { Result } from "./Result";
import { useState } from "react";
export function Main () {
    const [gender, setGender]  = useState();
    const [inputValue, setInputValue] = useState('');
    function handleChange(event){
        setInputValue(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    async function getGender() {
        let firstName = inputValue;
        const serverUrl = "https://api.genderize.io";
        const url = `${serverUrl}?name=${firstName}`;
        let response = await fetch(url);
        let commits = await response.json();
        setGender(commits.gender);
    }
     return (
     <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange}/>
        <Button onClick={getGender}/>
        {inputValue.length > 2 ? <Result value={gender} name={inputValue}/> : <Result value={"Введите корретное имя"} />}
     </form>
   )
}