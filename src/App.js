import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const appendValue = (val) => {
    setInput(input => input + val);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(input => eval(input).toString());
    } catch (e) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />  
        <div>
          <button onClick={() => appendValue('1')}>1</button>
          <button onClick={() => appendValue('2')}>2</button>
          <button onClick={() => appendValue('3')}>3</button>
          <button onClick={() => appendValue('4')}>4</button>
          <button onClick={() => appendValue('5')}>5</button>
          <button onClick={() => appendValue('6')}>6</button>
          <button onClick={() => appendValue('7')}>7</button>
          <button onClick={() => appendValue('8')}>8</button>
          <button onClick={() => appendValue('9')}>9</button>
          <button onClick={() => appendValue('0')}>0</button>
          <button onClick={() => appendValue('+')}>+</button>
          <button onClick={() => appendValue('-')}>-</button>
          <button onClick={() => appendValue('*')}>*</button>
          <button onClick={() => appendValue('/')}>/</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={clearInput}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;


