import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0){
    message = <p>Please add some products</p>
  }
  else {
    message = <div>
      <h3>Thanks for buy products</h3>
    </div>
  }
  return (
    <div className="cart-container">
      <h3 className={cart.length === 1 ? 'blue' : 'red'}>Cart components : {cart.length}</h3>
      <p className={`bold underline ${cart.length === 3 ? 'tomato' : 'blue'}`}>Something</p>
      {cart.length > 2 ? (
        <span className="orange">Please more buy product</span>
      ) : (
        <span>Fokir</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>
            Delete
          </button>
        </p>
      ))}
      {cart.length === 2 && <p>Double products add</p>}
      {cart.length === 3 || <h3>Tree products no added </h3>}
    </div>
  );
};

export default Cart;

/**
 * * CONDITIONAL RENDERING
 * *1. use if else to set a variable that will contain an element, component
 ** 2. ternary operator: condition ? 'for true' : 'false
 * * 3. Logical && : (if condition is true then the next thing will be displayed)
 * * 4. logical || (if the condition is false then the next thing will be displayed)
 * 
 * 
 * ? conditional css class / style
 * ? 1. use ternary operator
 * ? 2. ternary inside template string 
 *   */ 