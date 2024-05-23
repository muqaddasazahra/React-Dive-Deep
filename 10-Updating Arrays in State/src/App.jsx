import { useState } from "react"
import ShoppingCart from "./components/ShoppingCart"


function App() {
  
  const [newItem,setNewItem]=useState("")
  const initialProducts = [{
    id: 0,
    name: 'Detergent',
    count: 1,
  }, {
    id: 1,
    name: 'Dish Soap',
    count: 5,
  }, {
    id: 2,
    name: 'Cofee beans',
    count: 2,
  }];
  
  const [
    products,
    setProducts
  ] = useState(initialProducts)
  
  function handleIncreaseQuantity(productId) {
  setProducts(products.map(product=>{
            if(product.id===productId)
              {let updatedProduct={...product, count: product.count+1}
               return updatedProduct;
               }
            else
            return product;
              }))
  
}
function handleDecreaseQuantity(productId)
{
  let updatedProducts=products.map(product=>{
    if(product.id===productId)
        {let updatedProduct={...product, count: product.count-1}
         return updatedProduct;
         }
      else
      return product;
        })

   updatedProducts=updatedProducts.filter(p=>p.count>0)
   setProducts(updatedProducts);

}

  
  function handleAddItem(newItem)
  {
  let newProducts=[...products]
  newProducts.push({id: newProducts.length, name: newItem, count:1});
  setProducts(newProducts);
  setNewItem(" ")
  }

  return (
    <>

     <ShoppingCart products={products} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity}/>
     <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} />

     <button onClick={()=>handleAddItem(newItem)}>Add</button>
    </>
  )
}

export default App
