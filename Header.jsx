
import React,{useState} from "react";

function Header(){
    localStorage.setItem('todo','здесь будут дела')
    const [arr, setArr] = useState([localStorage.getItem('todo')]);
    const [value, setValue] = useState('');

    function onChangeHandler (event){
      setValue(event.target.value)
      
    }
    function onClickHandler(event){
        event.preventDefault()
      setArr([...arr, value])

      setValue('')
    }
    function clickDeletTask(index){
        
        setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
        localStorage.setItem('todo',arr)
        console.log(localStorage.getItem('todo'))
    }
    
    const result = arr.map((element, index) => {
        localStorage.setItem('todo',arr)
        console.log(localStorage.getItem('todo'))
       return (
        <div key={Date.now()}>
            <p >{element}<button onClick={()=>clickDeletTask(index)}>X</button></p>
        </div>)
    });
    return (
            <form onSubmit={onClickHandler}>
                  <input value={value} onChange={onChangeHandler} />
                  <input type='submit' value = 'Добавить' onClick={onClickHandler}/>
                  {result}
            </form>
    )
    }
export default Header

