// import React, { useState } from 'react';
import data from './data';

import './index.css';
import CardTurtle from './card';
const MarketPizza = () => {
  return (
    <div>
      <h1>ninja</h1>
      <div className='container'>

        {data.map((turtle) => (
          <CardTurtle key={turtle.name} turtle={turtle} />
        ))}
      </div>
    </div>

  );
};

export default MarketPizza;

