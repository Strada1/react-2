import React from "react";
const minLength = 2;

function InputText({type, placeholder, eventFunction, value}) {
  /*
  function handleInput(e) {
    const name = e.target.value;
    
    return name;
  }
  function checkNameLength(props){
    const value = props.name;
    value.length < minLength ? false : true
  }
  */
  return(
    <div className="input__container">
      <label htmlFor="input">
        Check your gender:
      </label>
      <input id="input" placeholder={placeholder} type={type} onChange={eventFunction} value={value} />
    </div>
    
  )
}

export default InputText