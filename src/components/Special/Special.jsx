import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ ring }) => {
    const angti = useContext(RingContext)
  return (
    <div>
      <h3>Special</h3>
      <p>{angti}</p>
    </div>
  );
};

export default Special;