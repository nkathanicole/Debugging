import React from 'react';

function Counter({ count, increment }) {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;