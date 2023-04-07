import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3> 
            <p><small>GranPa Money : {money}</small></p>
            <button onClick={()=> setMoney(money + 1000)}>Send Money</button>
            <section className='flex'>
                <Cousin>Amdad</Cousin>
                <Cousin>Sourob</Cousin>
            </section>
        </div>
    );
};

export default Uncle;<h3>Uncle</h3>