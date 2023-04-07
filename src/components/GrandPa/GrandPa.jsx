import React, { createContext, useState } from 'react';
import './GrandPa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunti from '../Aunti/Aunti';
export const RingContext = createContext('gold')
export const MoneyContext = createContext(0)
const GrandPa = () => {
    const [money, setMoney] = useState(0)
    const ring = "Diomond";
    return (
      <div className="grandpa">
        <h1>GrandPa</h1>
        <p>Has Money : {money}</p>
        <MoneyContext.Provider value={[money, setMoney]}>
          <RingContext.Provider value="golden ring">
            <section className="flex">
              <Father ring={ring}></Father>
              <Uncle></Uncle>
              <Aunti ring={ring}></Aunti>
            </section>
          </RingContext.Provider>
        </MoneyContext.Provider>
      </div>
    );
};

export default GrandPa;

/**
 * create context and export
 * create a provider and pass a value
 * useContext to receive value
 */