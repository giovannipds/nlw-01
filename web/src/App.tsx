import React from 'react';
import './App.css';

// JSX: Sintaxe de XML dentro do JavaScript

import Header from './Header';

function App() {
  let counter = 1;

  function handleButtonClick() {
    counter++;
    console.log(counter);
  }

  return (
    <div>
      <Header title="Hello World" />

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
