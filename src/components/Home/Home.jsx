import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from "react-hot-toast";
const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
          toast('this item already exists')
        }
        else {            
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = id => { 
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }
    return (
      <div className="home-container">
        <div className="t-shirts-container">
          {tshirts.map((tshirt) => (
            <TShirt
              key={tshirt._id}
              handleAddToCart={handleAddToCart}
              tshirt={tshirt}
            ></TShirt>
          ))}
        </div>
        <div className="cart-container">
          <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Home;