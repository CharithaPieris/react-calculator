import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(''); // Stores the current input
  const [result, setResult] = useState(''); // Stores the result

  // Handle button clicks
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // Evaluate the input
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput(''); // Clear input
      setResult('');
    } else if (value === '←') {
      setInput(input.slice(0, -1)); // Backspace
    } else {
      setInput(input + value); // Append value to input
    }
  };

  return (
    <div className="calculator">
      <center><h1>CALCULATOR</h1></center>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C', '←'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;