import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
      <div>
        <h3>Brother</h3>
        <p>
          <span>{ring}</span>
        </p>
      </div>
    );
};

export default Brother;