import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Sisterr = () => {
    const [money ,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Sister</h3>
            <p><span>GranPa Money : {money}</span></p>
        </div>
    );
};

export default Sisterr;