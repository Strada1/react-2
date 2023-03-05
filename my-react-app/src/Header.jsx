import { useState } from 'react'

const Header = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo({ id: String(Date.now()), task: inputValue, status: 'todo' })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={getInputValue}
        value={inputValue}
      />
      <button type='submit'>+</button>
    </form>
  )
}

export default Header
