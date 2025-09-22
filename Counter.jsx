import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={increment}>Increment</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
