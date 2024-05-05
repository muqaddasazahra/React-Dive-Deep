export default function SearchBar({
  searchText,
  isStockOnly,
  handleSearchText,
  handleIsStockOnly,
}) {
  return (
    <div className="my-4 mx-4 ">
      <form action="">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            handleSearchText(e.target.value);
          }}
          placeholder="   Type Item Name here  "
          className="border-black border-2 rounded-md my-2"
        />{" "}
        <br />
        <input id="check" type="checkbox" checked={isStockOnly} onChange={(e)=>{handleIsStockOnly(e.target.checked)}} />{" "}
        <label htmlFor="check"> Only show products in stock</label>
      </form>
    </div>
  );
}
