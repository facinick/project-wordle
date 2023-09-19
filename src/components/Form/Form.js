import React, { useState } from 'react';

function Form({onGuessSubmit, disable}) {

  const [value, setValue] = useState("")

  const onChange = (event) => {
    const inputValue = event.target.value
    const length = inputValue.length
    if(length > 5) {
      return
    }
    const uppercaseValue = inputValue.toUpperCase()
    setValue(uppercaseValue)
  }

  const clearInput = () => {
    setValue("")
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onGuessSubmit(value)
    clearInput()
  }

  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={disable} autoComplete='off' required id="guess-input" pattern="\w{5,5}" onChange={onChange} type="text" value={value} title="5 alphabets only" />
    </form>
  )
}

export default Form;
