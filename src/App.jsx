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
/* import { useState, useRef } from 'react';
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

export default App; */

import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    console.log(inputValue)
    setResult((prevResult) => prevResult + inputValue); 
    inputRef.current.value = '';
   
  }; 
 
  function minus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value); 
    console.log(inputValue)
    setResult((prevResult) => prevResult - inputValue); 
  	inputRef.current.value = '';
  };
 
  function times(e) { 
    e.preventDefault(); 
    const inputValue = Number(inputRef.current.value);
    console.log(inputValue)
    setResult((prevResult) => prevResult * inputValue);
    inputRef.current.value = ''; 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const inputValue = Number(inputRef.current.value); 
    console.log(inputValue)
    if(inputValue === 0){
      alert("The number can't be 0")
    }else{
    setResult((prevResult) => prevResult / inputValue);
    inputRef.current.value = '';
  } 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = null;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef} > 
        {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>rest</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button> 
       
      </form> 
    </div> 
  ); 
} 
 
export default App; 
