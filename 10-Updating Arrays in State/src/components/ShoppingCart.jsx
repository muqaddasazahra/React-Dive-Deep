
export default function ShoppingCart({products,handleDecreaseQuantity, handleIncreaseQuantity}) {
  

  return (
    <ul className="flex flex-col gap-3">
      {products.map(product => (
        <li className="flex gap-4 justify-center items-baseline"key={product.id}>
         <span className="w-48 h-10 bg-amber-400 px-2 py-1 rounded-md font-bold text-xl">{`${product.name}  `}</span>
          <b className="inline-block h-6 w-6 rounded-full text-center bg-amber-600 text-white ">{` ${product.count}`}</b>
          <button className="h-6 w-6 font-bold bg-amber-600 text-white rounded-md shadow-md" onClick={() => {
            handleIncreaseQuantity(product.id);
          }}>
            +
          </button>
          <button className="h-6 w-6 font-bold bg-amber-600 text-white rounded-md shadow-md" onClick={()=>{handleDecreaseQuantity(product.id)}}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
