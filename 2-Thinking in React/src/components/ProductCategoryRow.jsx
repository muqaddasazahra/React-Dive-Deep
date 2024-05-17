import React from "react";

export default function ProductCategoryRow({ product}) {
  let name;
  if(product.stocked) 
  name=product.name;
  else
  name=<span style={{color:"red"}}>{product.name}</span>

  return  <tr key={name}>
      <td>{name}</td>
      <td>{product.price}</td>
      </tr>
}
