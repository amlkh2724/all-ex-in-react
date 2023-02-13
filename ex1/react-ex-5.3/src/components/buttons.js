import React from 'react';

const FiveBalloons = () => {
  const kids = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ];

  const Mother = () => {
    return (
      <div>
        <h1>A tale of five Balloons</h1>
        {kids.map(kid => (
          <Child  kid={kid} />
        ))}
      </div>
    );
  };

  const Child = ({ kid }) => {
    return (
      <div>
        <h3>{kid.name}</h3>
        <Balloon color={kid.color} />
      </div>
    );
  };

  const Balloon = ({ color }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', width: 100, height: 100, borderRadius: 50, backgroundColor: color }}></div>
    );
  };

  return (
    <div className="container">
      <Mother />
    </div>
  );
};

export default FiveBalloons;