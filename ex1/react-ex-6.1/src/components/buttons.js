import React, { useState } from 'react';

const Increment = () => {
  const [counter, updateCounter] = useState(0);
  const updateCount = () => {
    updateCounter(prevCount => prevCount + 1)

  }
  return (

    <div>
      <span>{counter}</span>
      <button onClick={updateCount}>Increscent</button>
    </div>


  )
};

export default Increment;