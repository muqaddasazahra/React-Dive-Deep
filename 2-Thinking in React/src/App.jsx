import { useState } from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import products from "./products";

function App() {
  const [searchText, setSearchText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);
  

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="h-2/3 w-1/3 bg-slate-300 shadow-lg rounded ">
          <SearchBar
            searchText={searchText}
            isStockOnly={isStockOnly}
            handleSearchText={setSearchText}
            handleIsStockOnly={setIsStockOnly}
          />
          <ProductTable
            searchText={searchText}
            isStockOnly={isStockOnly}
            products={products}
          />
        </div>
      </div>
    </>
  );
}

export default App;
