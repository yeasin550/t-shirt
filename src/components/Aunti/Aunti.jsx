import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunti = ({ ring }) => {
  return (
    <div>
      <h3>Aunti</h3>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Nabila
        </Cousin>
      </section>
    </div>
  );
};

export default Aunti;<h3>Aunti</h3>