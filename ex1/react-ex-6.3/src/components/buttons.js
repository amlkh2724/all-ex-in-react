import React, { useState } from 'react';
import './index.css';

const BoxAppear = () => {
  const [counter, updateCounter] = useState(0);
  const CheckCounter = (e) => {
    if (counter < 0) {
      e.target.className = "red"
      console.log(e.target);

    }
    if (counter > 0) {
      e.target.className = "green"


    }
    if (counter === 0) {
      e.target.className = "black"

    }

  }
  const Incrementbyone = () => {
    updateCounter(prevCount => prevCount + 1)


  }
  const Decrementbyone = () => {
    updateCounter(prevCount => prevCount - 1)

  }
  return (
    <div className="theboxShow">
      <span className={CheckCounter}>{counter}</span>
      <button onClick={Incrementbyone}>increment</button>
      <button onClick={Decrementbyone}>decrement</button>

    </div>
  );
};

export default BoxAppear;