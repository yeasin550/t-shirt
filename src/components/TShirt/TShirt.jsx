import React from 'react';
import './TShirt.css'
const TShirt = ({ tshirt, handleAddToCart }) => {
//   console.log(tshirt);
  const { name, picture, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <h3>Price : ${price}</h3>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;