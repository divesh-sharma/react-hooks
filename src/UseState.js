import React, { useState } from 'react';

export default function UseState() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState();
  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Use State Hook:</h1>
      <p>Count:{count}</p>
      <button onClick={increment}>Click Me</button>
    </div>
  );
}
