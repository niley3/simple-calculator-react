import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => (e) => {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    
    if (isNaN(value)) {
      alert("Please enter a valid number");
      return;
    }

    switch (operation) {
      case "add":
        setResult(prevResult => prevResult + value);
        break;
      case "subtract":
        setResult(prevResult => prevResult - value);
        break;
      case "multiply":
        setResult(prevResult => prevResult * value);
        break;
      case "divide":
        if (value === 0) {
          alert("Cannot divide by zero");
        } else {
          setResult(prevResult => prevResult / value);
        }
        break;
      default:
        break;
    }
    
    inputRef.current.value = ''; // Clear input field
  };

  const handleResetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
  };

  const handleResetResult = (e) => {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Simplest Working Calculator</h1>
      </div>
      <form className="calculator-form">
        <p className="total-display">Total: {result}</p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Enter a number"
          aria-label="Number input"
        />
        <div className="buttons">
          <button onClick={handleOperation("add")}>Add</button>
          <button onClick={handleOperation("subtract")}>Subtract</button>
          <button onClick={handleOperation("multiply")}>Multiply</button>
          <button onClick={handleOperation("divide")}>Divide</button>
        </div>
        <div className="buttons">
          <button onClick={handleResetInput}>Reset Input</button>
          <button onClick={handleResetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
