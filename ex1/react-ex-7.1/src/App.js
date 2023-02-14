import React, { useState } from 'react';

import './index.css';
import CustomButton from './components/buttons';


function App() {
  const [state, setstate] = useState(null);
  const handleColorSelect = (color) => {
    setstate(color);
  } 


  return (
    <div className="App">
      <CustomButton onClick={handleColorSelect}></CustomButton>
      <h1>the selected color is:{state}</h1>
    </div>
  );
}

export default App;
