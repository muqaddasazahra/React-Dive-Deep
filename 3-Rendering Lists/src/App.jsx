import { useState } from "react";
import FilterButton from "./components/FilterButton";
import List from "./components/List";

function App() {
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  const [listType, setListType] = useState("scientist");
  const [typedText, setTypedText]=useState();
  function handleClick(clickedButton) {
    if (clickedButton === "filter") {
      setFilterButtonClicked(!filterButtonClicked);
      return;
    }
    setListType(clickedButton);
    setFilterButtonClicked(!filterButtonClicked);
  }
  function handleChange(event)
  {
  setTypedText(event.target.value);
  }
  return (
    <>
      <div className="w-full mt-24 flex flex-col items-center justify-center gap-3">
        
        <div className="w-2/4 flex gap-2 justify-center items-center">
          <h1 className="px-4  py-2 my-4 w-1/3 text-center bg-blue-600 text-white border-blue-600 rounded-md">
            {listType.toUpperCase()}
          </h1>
          <FilterButton
            filterButtonClicked={filterButtonClicked}
            handleClick={handleClick}
          />
          <input onChange={handleChange} type="text" placeholder="Type Profession to search profile"  className="bg-white shadow focus:outline-none text-blue-600 focus:border-blue-600 rounded-md border-2 px-4 py-2 placeholder:text-gray-400   " />
        </div>

        <List listType={listType} handleClick={handleClick} typedText={typedText}/>
      </div>
    </>
  );
}

export default App;
