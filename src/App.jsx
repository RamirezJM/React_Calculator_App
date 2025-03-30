/* import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const inputRef = useRef(null); 
  
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((prevResult) => prevResult + Number(inputRef.current.value)); 
    inputRef.current.value = ""
  }; 
 
  function minus(e) {
     e.preventDefault(); 
    setResult((prevResult) => prevResult - Number(inputRef.current.value));
    inputRef.current.value = "" 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((prevResult) => prevResult * Number(inputRef.current.value));
    inputRef.current.value = "" 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((prevResult) => prevResult / Number(inputRef.current.value));
    inputRef.current.value = "" 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = ""
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div className='title'> 
        <h1>Calculator</h1>
        <img src={reactLogo} alt="react logo" /> 
      </div> 
      <form> 
        <p>{result}</p> 
        <input
          pattern="[0-9]*" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={resetInput}>Clear</button>
        <button onClick={resetResult}>Reset Result</button> 
        
      </form> 
    </div> 
  ); 

}
export default App
 */
import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState(null);

  function handleOperation(op) {
    if (operator === null) {
      setResult(Number(inputRef.current.value));
    }
    setOperator(op);
    inputRef.current.value = '';
  }

  function calculate() {
    const inputValue = Number(inputRef.current.value);
    switch (operator) {
      case '+':
        setResult((prevResult) => prevResult + inputValue);
        break;
      case '-':
        setResult((prevResult) => prevResult - inputValue);
        break;
      case '*':
        setResult((prevResult) => prevResult * inputValue);
        break;
      case '/':
        setResult((prevResult) => prevResult / inputValue);
        break;
      default:
        break;
    }
    setOperator(null);
    inputRef.current.value = '';
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Calculator</h1>
        <img src={reactLogo} alt="react logo" />
      </div>
      <form>
        <p>{result}</p>
        <input
          pattern="[0-9]*"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={resetInput}>Clear</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;