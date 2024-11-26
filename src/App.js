import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Message from './Message';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello, World!");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const changeMessage = () => {
    setMessage("New Message!");
  };

  return (
    <div className="App">
      <h1>Sample React Application</h1>
      <Counter count={count} increment={incrementCount} />
      <Message message={message} changeMessage={changeMessage} />
    </div>
  );
}

export default App;