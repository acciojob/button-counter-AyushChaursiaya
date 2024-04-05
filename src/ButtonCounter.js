import React, { useState } from 'react';

function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Button clicked {count} times</p>
    </div>
  );
}

export default ButtonCounter;
