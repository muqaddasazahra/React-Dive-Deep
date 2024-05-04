import ProductTable from "./components/ProductTable"
import SearchBar from "./components/SearchBar"
import products from "./products"

function App() {


  return (
    <>
     <div className="h-screen w-full flex justify-center items-center">
     <div className="h-2/3 w-1/3 bg-slate-300 shadow-lg rounded">
      <SearchBar/>
      <ProductTable products={products}/>
     </div>
     </div>
    </>
  )
}

export default App
