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
    <div className="h-screen w-full flex justify-center items-center">
    <div className="h-2/3 w-1/3 p-14 border-2 border-amber-500 rounded-md relative shadow-2xl flex flex-col justify-center items-center">
    <ShoppingCart products={products} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity}/>
    <div className="flex gap-2 w-80 justify-center items-center rounded-md h-[20%] absolute bottom-[-30px]  bg-amber-500">
    <input type="text" value={newItem} className="bg-gray-200 rounded-md h-8  focus:outline-none focus:border-2 focus:border-white px-1"onChange={(e)=>setNewItem(e.target.value)} />

     <button className="font-bold text-white tracking-wide" onClick={()=>handleAddItem(newItem)}>Add</button>
     </div>
    </div>
    </div>
    
    </>
  )
}

export default App
