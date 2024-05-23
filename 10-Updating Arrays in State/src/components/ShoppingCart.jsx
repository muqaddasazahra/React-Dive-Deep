import { useState } from "react";
export default function ShoppingCart({products,handleDecreaseQuantity, handleIncreaseQuantity}) {
  

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {`${product.name}  `}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseQuantity(product.id);
          }}>
            +
          </button>
          <button onClick={()=>{handleDecreaseQuantity(product.id)}}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
