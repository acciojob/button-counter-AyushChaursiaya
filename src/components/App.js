
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
import React, { useState } from 'react';

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ButtonCounter;
