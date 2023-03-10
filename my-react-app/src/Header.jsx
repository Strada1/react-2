import { useState } from 'react'

const defaultInputValue = ''
const Header = ({ requestWeather }) => {
  const [inputValue, setInputValue] = useState(defaultInputValue)
  
  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
    requestWeather(inputValue)
    setInputValue(defaultInputValue)
  }
   catch (error) {
  console.error(error) 
}
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        onChange={getInputValue}
        value={inputValue}
      />
      <button type='submit'>+</button>
    </form>
  )
}

export default Header
