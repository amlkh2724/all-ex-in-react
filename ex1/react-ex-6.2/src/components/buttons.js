import React, { useState } from 'react';
import './index.css';

const BoxAppear = () => {
  const [show, updateShow] = useState(true);
  const showBackground = () => {
    updateShow(!show)
  }
  return (
    <div className="theboxShow">
      <button onClick={showBackground}>{show ? "Show" : "Hide"}</button>
      <div className={show ? "hidden" : "display"}></div>
      
    </div>
  );
};

export default BoxAppear;