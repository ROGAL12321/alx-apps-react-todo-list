import React, { useState } from 'react';

import './index.css';

// React - Komponenty funkcyjne
function App() {
  const [text, changeText] = useState('World');
  const [inputValue, setInputValue] = useState('');
  // const hook = useState('World');
  // const text = hook[0];
  // const changeText = hook[1]

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   changeText('Hej!')
  // }

  const handleInputChange = (event) => {
    event.preventDefault();
    // Odczytywanie wartości inputa
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    changeText(inputValue);
    setInputValue('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Wpisz treść
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
      <h1> Hello {text} </h1>
    </div>
  );
}

export default App;