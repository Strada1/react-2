import './input.css'

function Input({onChange, value}) {
    return (
        <input type='text' placeholder='Введите имя' className="input"  onChange={onChange}  value={value} />
    );
  };
  
  export default Input;